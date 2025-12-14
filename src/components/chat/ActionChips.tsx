import { motion } from 'framer-motion';

interface ActionChipsProps {
  chips: string[];
  onChipClick: (chip: string) => void;
}

export const ActionChips = ({ chips, onChipClick }: ActionChipsProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="flex flex-wrap gap-2 mt-2"
    >
      {chips.map((chip, index) => (
        <motion.button
          key={chip}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 * index }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onChipClick(chip)}
          className="px-4 py-2 rounded-full border-2 border-primary/50 bg-background hover:bg-accent text-foreground text-sm font-medium transition-all duration-200 hover:border-primary hover:shadow-md"
        >
          {chip}
        </motion.button>
      ))}
    </motion.div>
  );
};
