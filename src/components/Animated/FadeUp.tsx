import React from 'react';
import { motion, useInView } from 'framer-motion';
import type { TagName } from 'src/types';

interface Props {
  children: React.ReactNode;
  as?: TagName;
}

export default function FadeUp({ children, as = 'div' }: Props) {
  const AnimatedFadeUp = motion[as];
  const ref = React.useRef(null);
  const isInView = useInView(ref, {
    margin: '0px 100px -50px 0px',
    once: true,
  });

  return (
    <AnimatedFadeUp
      ref={ref}
      initial={{
        opacity: 0,
        y: 50,
      }}
      animate={
        isInView
          ? {
              opacity: 1,
              y: 0,
            }
          : {}
      }
      transition={
        isInView
          ? {
              delay: 0.6,
              duration: 1,
              ease: [0.6, 0.05, -0.01, 0.9],
            }
          : {}
      }
    >
      {children}
    </AnimatedFadeUp>
  );
}
