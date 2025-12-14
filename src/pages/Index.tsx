import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { IntroView } from '@/components/views/IntroView';
import { LandingView } from '@/components/views/LandingView';
import { ChatView } from '@/components/views/ChatView';
import { ViewType, UserProfile } from '@/types';

const INTRO_DURATION = 3000; // 3 seconds

const Index = () => {
  const [view, setView] = useState<ViewType>('intro');
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);

  // Auto-transition from intro to landing
  useEffect(() => {
    if (view === 'intro') {
      const timer = setTimeout(() => {
        setView('landing');
      }, INTRO_DURATION);
      return () => clearTimeout(timer);
    }
  }, [view]);

  const handleStartChat = (profile: UserProfile) => {
    setUserProfile(profile);
    setView('chat');
  };

  const handleEndSession = () => {
    setUserProfile(null);
    setView('landing');
  };

  return (
    <div className="min-h-screen bg-background">
      <AnimatePresence mode="wait">
        {view === 'intro' && (
          <IntroView key="intro" onComplete={() => setView('landing')} />
        )}
        {view === 'landing' && (
          <LandingView key="landing" onStartChat={handleStartChat} />
        )}
        {view === 'chat' && userProfile && (
          <ChatView 
            key="chat" 
            userProfile={userProfile} 
            onEndSession={handleEndSession} 
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Index;
