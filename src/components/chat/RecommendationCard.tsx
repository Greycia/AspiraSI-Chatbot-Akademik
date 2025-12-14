import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CardData } from '@/types';

export const RecommendationCard = ({ platform, title, desc, url }: CardData) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.02 }}
      className="bg-card border-l-4 border-l-primary rounded-xl shadow-lg p-4 max-w-sm"
    >
      {/* Platform Badge */}
      <span className="inline-block px-3 py-1 bg-accent text-accent-foreground text-xs font-semibold rounded-full mb-3">
        {platform}
      </span>

      {/* Title */}
      <h4 className="font-bold text-card-foreground mb-2">{title}</h4>

      {/* Description */}
      <p className="text-sm text-muted-foreground mb-4">{desc}</p>

      {/* Link Button */}
      <Button
        variant="outline"
        size="sm"
        className="w-full border-primary/50 text-primary hover:bg-accent"
        onClick={() => window.open(url, '_blank', 'noopener,noreferrer')}
      >
        <ExternalLink className="w-4 h-4 mr-2" />
        Buka Link
      </Button>
    </motion.div>
  );
};
