import { motion } from 'framer-motion';

interface IntroViewProps {
  onComplete: () => void;
}

export const IntroView = ({ onComplete }: IntroViewProps) => {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
      onAnimationComplete={(definition) => {
        if (definition === 'exit') onComplete();
      }}
    >
      {/* Ambient glow background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-1/2 -left-1/2 w-full h-full rounded-full bg-primary/20 blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute -bottom-1/2 -right-1/2 w-full h-full rounded-full bg-secondary/20 blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* SVG Circle Animation */}
      <div className="relative">
        <svg
          className="absolute -inset-8 w-[calc(100%+4rem)] h-[calc(100%+4rem)]"
          viewBox="0 0 200 200"
        >
          <motion.circle
            cx="100"
            cy="100"
            r="90"
            fill="none"
            stroke="url(#gradient)"
            strokeWidth="2"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(27, 100%, 50%)" />
              <stop offset="100%" stopColor="hsl(217, 89%, 31%)" />
            </linearGradient>
          </defs>
        </svg>

        {/* Main Title */}
        <motion.h1
          className="text-5xl md:text-7xl font-bold gradient-text tracking-tight"
          initial={{ scale: 0.5, opacity: 0, letterSpacing: '0.5em' }}
          animate={{ scale: 1, opacity: 1, letterSpacing: '-0.02em' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          AspiraSI
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-center text-xs md:text-sm uppercase tracking-[0.3em] text-muted-foreground mt-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          by Greycia
        </motion.p>
      </div>
    </motion.div>
  );
};
