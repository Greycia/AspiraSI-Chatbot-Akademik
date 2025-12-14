import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { MessageBubble } from '@/components/chat/MessageBubble';
import { TypingIndicator } from '@/components/chat/TypingIndicator';
import { UserProfile } from '@/types';
import { useChat } from '@/hooks/useChat';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';

interface ChatViewProps {
  userProfile: UserProfile;
  onEndSession: () => void;
}

export const ChatView = ({ userProfile, onEndSession }: ChatViewProps) => {
  const { messages, isTyping, processUserMessage, resetChat } = useChat(userProfile);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  // Improved auto-scroll with setTimeout to prevent jitter
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
    
    return () => clearTimeout(timeoutId);
  }, [messages.length, isTyping]);

  const handleSend = () => {
    if (!inputValue.trim()) return;
    processUserMessage(inputValue.trim());
    setInputValue('');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleChipClick = (chip: string) => {
    processUserMessage(chip);
  };

  const handleEndSession = () => {
    resetChat();
    onEndSession();
  };

  return (
    <motion.div
      initial={{ y: '100%' }}
      animate={{ y: 0 }}
      exit={{ y: '100%' }}
      transition={{ type: 'spring', damping: 25, stiffness: 200 }}
      className="flex flex-col h-[100dvh] bg-background"
    >
      {/* Ambient glow for desktop sides */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 rounded-full bg-secondary/10 blur-3xl" />
      </div>

      {/* Chat Container - Centered on desktop */}
      <div className="flex-1 flex flex-col max-w-[600px] w-full mx-auto min-h-0">
        {/* Sticky Header */}
        <header className="shrink-0 z-20 glass border-b border-border/50 px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-xl font-bold gradient-text">AspiraSI</span>
            <span className="flex items-center gap-1 text-xs text-muted-foreground">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Online
            </span>
          </div>
          
          {/* End Session with Alert Dialog */}
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button
                variant="outline"
                size="sm"
                className="border-destructive text-destructive hover:bg-destructive/10"
              >
                <LogOut className="w-4 h-4 mr-2" />
                Akhiri Sesi
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent className="glass">
              <AlertDialogHeader>
                <AlertDialogTitle>Akhiri Sesi?</AlertDialogTitle>
                <AlertDialogDescription>
                  Semua riwayat chat dan profilmu akan dihapus permanen.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Batal</AlertDialogCancel>
                <AlertDialogAction
                  onClick={handleEndSession}
                  className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                >
                  Ya, Akhiri
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </header>

        {/* Messages Container - Flex-1 with overflow */}
        <div
          ref={chatContainerRef}
          className="flex-1 overflow-y-auto px-4 py-6 min-h-0"
        >
          {/* Empty State Watermark */}
          {messages.length === 0 && !isTyping && (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <span className="text-6xl font-bold gradient-text opacity-5">AspiraSI</span>
            </div>
          )}

          {/* Messages */}
          <AnimatePresence mode="popLayout">
            {messages.map((message) => (
              <MessageBubble
                key={message.id}
                message={message}
                onChipClick={handleChipClick}
              />
            ))}
          </AnimatePresence>

          {/* Typing Indicator */}
          <AnimatePresence>
            {isTyping && <TypingIndicator />}
          </AnimatePresence>

          {/* Scroll anchor */}
          <div ref={messagesEndRef} className="h-1" />
        </div>

        {/* Input Area - Shrink-0, no fixed positioning */}
        <div className="shrink-0 z-10 glass border-t border-border/50 px-4 py-3 pb-safe">
          <div className="flex gap-2">
            <Input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Ketik pesanmu..."
              aria-label="Chat input"
              className="flex-1 glass border-border/50"
            />
            <Button
              onClick={handleSend}
              disabled={!inputValue.trim()}
              className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 glow-orange"
            >
              <Send className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
