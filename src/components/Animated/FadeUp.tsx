import { motion } from 'framer-motion';
import type { TagName } from 'src/types';

interface Props {
  children: React.ReactNode;
  as?: TagName;
}

export default function FadeUp({ children, as = 'div' }: Props) {
  const AnimatedFadeUp = motion[as];
  return (
    <AnimatedFadeUp
      initial={{
        opacity: 0,
        y: 50,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        delay: 0.6,
        duration: 1,
        ease: [0.6, 0.05, -0.01, 0.9],
      }}
    >
      {children}
    </AnimatedFadeUp>
  );
}
