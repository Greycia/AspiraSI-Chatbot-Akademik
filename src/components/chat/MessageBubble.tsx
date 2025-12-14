import { motion } from 'framer-motion';
import { Message } from '@/types';
import { RecommendationCard } from './RecommendationCard';
import { ActionChips } from './ActionChips';
import { cn } from '@/lib/utils';

interface MessageBubbleProps {
  message: Message;
  onChipClick?: (chip: string) => void;
}

export const MessageBubble = ({ message, onChipClick }: MessageBubbleProps) => {
  if (message.role === 'system') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex justify-center my-4"
      >
        <span className="text-xs text-muted-foreground italic">
          {message.content}
        </span>
      </motion.div>
    );
  }

  const isBot = message.role === 'bot';
  const isCard = message.type === 'card' && message.cardData;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={cn(
        "flex gap-3 mb-4",
        isBot ? "justify-start" : "justify-end"
      )}
    >
      {/* Bot Avatar */}
      {isBot && (
        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-primary-foreground font-bold shadow-lg">
          A
        </div>
      )}

      <div className={cn("flex flex-col gap-2", isBot ? "items-start" : "items-end", "max-w-[80%]")}>
        {/* Message Content */}
        {isCard && message.cardData ? (
          <RecommendationCard {...message.cardData} />
        ) : message.content ? (
          <div
            className={cn(
              "px-4 py-3 rounded-2xl shadow-md whitespace-pre-wrap",
              isBot
                ? "glass border border-border/50 text-foreground rounded-tl-sm"
                : "bg-gradient-to-r from-primary to-primary/80 text-primary-foreground rounded-tr-sm"
            )}
          >
            {message.content}
          </div>
        ) : null}

        {/* Action Chips */}
        {isBot && message.chips && message.chips.length > 0 && onChipClick && (
          <ActionChips chips={message.chips} onChipClick={onChipClick} />
        )}
      </div>
    </motion.div>
  );
};
