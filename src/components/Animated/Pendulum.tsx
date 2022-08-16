import React from 'react';
import { motion } from 'framer-motion';
import type { TagName } from 'src/types';

interface Props {
  children: React.ReactNode;
  as?: TagName;
}

export default function Pendulum({ children, as = 'div' }: Props) {
  const AnimatedPendulum = motion[as];

  return (
    <AnimatedPendulum
      animate={{ y: [0, 20] }}
      transition={{
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      {children}
    </AnimatedPendulum>
  );
}
