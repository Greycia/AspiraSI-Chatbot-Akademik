// Define InterestType directly to avoid circular dependency
export type InterestType = "IS Governance" | "Enterprise System" | "Business Intelligence";

export interface CardData {
  platform: string;
  title: string;
  desc: string;
  url: string;
}

export interface Message {
  id: string;
  role: 'user' | 'bot' | 'system';
  content: string;
  type: 'text' | 'card';
  cardData?: CardData;
  chips?: string[];
  timestamp: Date;
}

export interface UserProfile {
  name: string;
  semester: number;
  gpa: number;
  interest: InterestType;
}

export type ViewType = 'intro' | 'landing' | 'chat';

export type AppState = {
  view: ViewType;
  userProfile: UserProfile | null;
  messages: Message[];
  isTyping: boolean;
};
