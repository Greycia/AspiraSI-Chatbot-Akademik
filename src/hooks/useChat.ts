import { useState, useCallback, useRef, useEffect } from 'react';
import { Message, UserProfile, InterestType } from '@/types';
import { 
  PRADITA_DATA, 
  KEYWORDS, 
  DEFAULT_CHIPS,
  CAREER_PATHS,
  PORTFOLIO_DATA,
  BOOTCAMP_RECOMMENDATIONS,
  INTEREST_OPTIONS
} from '@/data/knowledge';

const MAX_MESSAGES = 50;

const generateId = () => Math.random().toString(36).substring(2, 15);

const matchKeywords = (text: string, keywords: readonly string[]): boolean => {
  const lowerText = text.toLowerCase();
  return keywords.some(keyword => lowerText.includes(keyword.toLowerCase()));
};

type ConversationState = 
  | 'idle' 
  | 'awaiting_roadmap_major' 
  | 'awaiting_roadmap_career';

interface RoadmapContext {
  selectedMajor?: InterestType;
}

export const useChat = (userProfile: UserProfile | null) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [conversationState, setConversationState] = useState<ConversationState>('idle');
  const [roadmapContext, setRoadmapContext] = useState<RoadmapContext>({});
  const hasInitialized = useRef(false);

  const addMessage = useCallback((message: Omit<Message, 'id' | 'timestamp'>) => {
    setMessages(prev => {
      const newMessages = [...prev, { ...message, id: generateId(), timestamp: new Date() }];
      return newMessages.slice(-MAX_MESSAGES);
    });
  }, []);

  const simulateBotResponse = useCallback(async (
    content: string,
    type: 'text' | 'card' = 'text',
    cardData?: Message['cardData'],
    chips?: string[]
  ) => {
    setIsTyping(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsTyping(false);
    addMessage({ role: 'bot', content, type, cardData, chips });
  }, [addMessage]);

  const getInterestResponse = useCallback((interest: InterestType): void => {
    const data = PRADITA_DATA[interest];
    const matkulList = data.matkul.join(", ");
    const additionalInfo = data.additionalCourses && data.additionalCourses.length > 0
      ? `\n\n📖 Mata Kuliah Pilihan:\n${data.additionalCourses.map(c => `• ${c.name}: ${c.desc}`).join('\n')}`
      : '';
    const response = `${data.desc}\n\n📚 Mata Kuliah Utama: ${matkulList}${additionalInfo}\n\n🎯 Prospek Karir: ${data.role}`;
    
    simulateBotResponse(response, 'text', undefined, [...DEFAULT_CHIPS]);
  }, [simulateBotResponse]);

  // Step 1: Ask for major selection
  const initiateRoadmapFlow = useCallback((): void => {
    setConversationState('awaiting_roadmap_major');
    setRoadmapContext({});
    simulateBotResponse(
      "Untuk memberikan roadmap yang tepat, silakan pilih peminatan (penjurusan) kamu terlebih dahulu:",
      'text',
      undefined,
      [...INTEREST_OPTIONS]
    );
  }, [simulateBotResponse]);

  // Step 2: After major selected, show careers
  const handleMajorSelection = useCallback(async (major: InterestType): Promise<void> => {
    setRoadmapContext({ selectedMajor: major });
    setConversationState('awaiting_roadmap_career');
    
    const careerData = CAREER_PATHS[major];
    const careerChips = careerData.careers.map(c => c.role);
    
    await simulateBotResponse(
      `📘 ${major}\n\n${careerData.description}\n\nBerikut adalah 10 prospek karier untuk bidang ini. Pilih salah satu untuk melihat roadmap belajarnya:`,
      'text',
      undefined,
      careerChips
    );
  }, [simulateBotResponse]);

  // Step 3: After career selected, show roadmap + bootcamp cards
  const handleCareerSelection = useCallback(async (career: string): Promise<void> => {
    const major = roadmapContext.selectedMajor;
    if (!major) {
      setConversationState('idle');
      return;
    }

    const careerData = CAREER_PATHS[major];
    const selectedCareer = careerData.careers.find(c => c.role === career);
    
    if (!selectedCareer) {
      setConversationState('idle');
      return;
    }

    setConversationState('idle');
    
    // Send roadmap text
    await simulateBotResponse(
      `🎯 Roadmap untuk ${selectedCareer.role}:\n\n${selectedCareer.roadmap}`
    );

    // Determine which bootcamp cards to show based on major
    let bootcampCards: Array<{ platform: string; title: string; desc: string; url: string }>;
    if (major === "Business Intelligence") {
      bootcampCards = [...BOOTCAMP_RECOMMENDATIONS.data];
    } else if (major === "IS Governance") {
      bootcampCards = [...BOOTCAMP_RECOMMENDATIONS.governance];
    } else {
      bootcampCards = [...BOOTCAMP_RECOMMENDATIONS.general];
    }

    // Show recommendation cards
    for (let i = 0; i < bootcampCards.length; i++) {
      const card = bootcampCards[i];
      const isLast = i === bootcampCards.length - 1;
      await simulateBotResponse(
        "", 
        'card', 
        { platform: card.platform, title: card.title, desc: card.desc, url: card.url },
        isLast ? [...DEFAULT_CHIPS] : undefined
      );
    }
  }, [roadmapContext, simulateBotResponse]);

  // Portfolio response with links and project ideas
  const getPortfolioResponse = useCallback(async (interest: InterestType): Promise<void> => {
    const portfolioData = PORTFOLIO_DATA[interest];
    
    // Format links as clickable text
    const linksText = portfolioData.links.map((link, i) => `${i + 1}. ${link}`).join('\n');
    
    await simulateBotResponse(
      `Berdasarkan peminatanmu di ${interest}, berikut adalah referensi portfolio yang bisa kamu pelajari:\n\n🔗 Referensi Portfolio:\n${linksText}`
    );

    await simulateBotResponse(
      `💡 Ide Project yang Bisa Kamu Bangun:\n\n${portfolioData.projects}`,
      'text',
      undefined,
      [...DEFAULT_CHIPS]
    );
  }, [simulateBotResponse]);

  const processUserMessage = useCallback((text: string) => {
    if (!userProfile) return;

    addMessage({ role: 'user', content: text, type: 'text' });

    const lowerText = text.toLowerCase();

    // Handle conversation states
    if (conversationState === 'awaiting_roadmap_major') {
      // Check if user selected a valid major
      const matchedMajor = INTEREST_OPTIONS.find(
        option => lowerText.includes(option.toLowerCase()) || text === option
      );
      
      if (matchedMajor) {
        handleMajorSelection(matchedMajor);
        return;
      }
    }

    if (conversationState === 'awaiting_roadmap_career') {
      const major = roadmapContext.selectedMajor;
      if (major) {
        const careerData = CAREER_PATHS[major];
        const matchedCareer = careerData.careers.find(
          c => lowerText.includes(c.role.toLowerCase()) || text === c.role
        );
        
        if (matchedCareer) {
          handleCareerSelection(matchedCareer.role);
          return;
        }
      }
    }

    // Normal keyword matching
    if (matchKeywords(lowerText, KEYWORDS.INTEREST)) {
      getInterestResponse(userProfile.interest);
    } else if (matchKeywords(lowerText, KEYWORDS.ROADMAP)) {
      // Step 1: Ask for major first
      initiateRoadmapFlow();
    } else if (matchKeywords(lowerText, KEYWORDS.PORTFOLIO)) {
      getPortfolioResponse(userProfile.interest);
    } else {
      // Check if it's a major option even without prior context
      const matchedMajor = INTEREST_OPTIONS.find(
        option => lowerText.includes(option.toLowerCase()) || text === option
      );
      
      if (matchedMajor) {
        handleMajorSelection(matchedMajor);
        return;
      }

      // Fallback message
      simulateBotResponse(
        "Maaf, sebagai asisten demo, aku baru belajar topik Peminatan, Roadmap, dan Portofolio. Coba klik tombol opsi di bawah ya!",
        'text',
        undefined,
        [...DEFAULT_CHIPS]
      );
    }
  }, [userProfile, addMessage, conversationState, roadmapContext, getInterestResponse, initiateRoadmapFlow, handleMajorSelection, handleCareerSelection, getPortfolioResponse, simulateBotResponse]);

  const initializeChat = useCallback(async () => {
    if (!userProfile || hasInitialized.current) return;
    hasInitialized.current = true;

    // System message
    const now = new Date();
    const timeString = now.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' });
    addMessage({ role: 'system', content: `Sesi dimulai pukul ${timeString}`, type: 'text' });

    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Greeting
    await simulateBotResponse(
      `Halo ${userProfile.name}! Aku lihat IPK-mu ${userProfile.gpa.toFixed(2)}. Pilihan ${userProfile.interest} itu menarik banget!`
    );

    await new Promise(resolve => setTimeout(resolve, 500));

    // Follow up with chips
    await simulateBotResponse(
      "Berdasarkan profilmu, ada 3 hal yang bisa aku bantu:",
      'text',
      undefined,
      [...DEFAULT_CHIPS]
    );
  }, [userProfile, addMessage, simulateBotResponse]);

  const resetChat = useCallback(() => {
    setMessages([]);
    setIsTyping(false);
    setConversationState('idle');
    setRoadmapContext({});
    hasInitialized.current = false;
  }, []);

  useEffect(() => {
    if (userProfile && !hasInitialized.current) {
      initializeChat();
    }
  }, [userProfile, initializeChat]);

  return {
    messages,
    isTyping,
    processUserMessage,
    resetChat
  };
};
