import { motion } from 'motion/react';

interface LogoProps {
  size?: number;
  animated?: boolean;
}

export function Logo({ size = 80, animated = false }: LogoProps) {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      initial={animated ? { scale: 0, rotate: -180 } : {}}
      animate={animated ? { scale: 1, rotate: 0 } : {}}
      transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
    >
      {/* Hexagonal Border - Representing Innovation */}
      <motion.path
        d="M50 5 L85 25 L85 65 L50 85 L15 65 L15 25 Z"
        stroke="url(#gradient1)"
        strokeWidth="2.5"
        fill="none"
        initial={animated ? { pathLength: 0 } : {}}
        animate={animated ? { pathLength: 1 } : {}}
        transition={{ duration: 1.5, ease: 'easeInOut' }}
      />
      
      {/* Lightning Bolt - Energy & Innovation */}
      <motion.path
        d="M55 20 L40 50 L50 50 L45 75 L65 45 L55 45 L60 30 Z"
        fill="url(#gradient2)"
        initial={animated ? { opacity: 0, scale: 0 } : {}}
        animate={animated ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.8 }}
      />
      
      {/* Grid Pattern Background */}
      <motion.g
        initial={animated ? { opacity: 0 } : {}}
        animate={animated ? { opacity: 0.3 } : { opacity: 0.3 }}
        transition={{ duration: 0.5, delay: 1.2 }}
      >
        <line x1="25" y1="30" x2="75" y2="30" stroke="#FF6B35" strokeWidth="0.5" />
        <line x1="25" y1="50" x2="75" y2="50" stroke="#FF6B35" strokeWidth="0.5" />
        <line x1="25" y1="70" x2="75" y2="70" stroke="#FF6B35" strokeWidth="0.5" />
        <line x1="30" y1="25" x2="30" y2="75" stroke="#FF6B35" strokeWidth="0.5" />
        <line x1="50" y1="25" x2="50" y2="75" stroke="#FF6B35" strokeWidth="0.5" />
        <line x1="70" y1="25" x2="70" y2="75" stroke="#FF6B35" strokeWidth="0.5" />
      </motion.g>
      
      {/* Corner Nodes - Connection Points */}
      <motion.g
        initial={animated ? { scale: 0 } : {}}
        animate={animated ? { scale: 1 } : {}}
        transition={{ duration: 0.5, delay: 1.5 }}
      >
        <circle cx="50" cy="5" r="3" fill="#FF6B35" />
        <circle cx="85" cy="25" r="3" fill="#F7931E" />
        <circle cx="85" cy="65" r="3" fill="#FF6B35" />
        <circle cx="50" cy="85" r="3" fill="#F7931E" />
        <circle cx="15" cy="65" r="3" fill="#FF6B35" />
        <circle cx="15" cy="25" r="3" fill="#F7931E" />
      </motion.g>
      
      {/* Gradients */}
      <defs>
        <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF6B35" />
          <stop offset="50%" stopColor="#F7931E" />
          <stop offset="100%" stopColor="#FF6B35" />
        </linearGradient>
        <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFB800" />
          <stop offset="100%" stopColor="#FF6B35" />
        </linearGradient>
      </defs>
    </motion.svg>
  );
}