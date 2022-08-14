import React from 'react';
import { motion, useInView } from 'framer-motion';
import type { TagName } from 'src/types';

interface Props {
  children: React.ReactNode;
  as?: TagName;
  once?: boolean;
}

export default function FadeRight({
  children,
  as = 'div',
  once = false,
}: Props) {
  const AnimatedFadeUp = motion[as];
  const ref = React.useRef(null);
  const isInView = useInView(ref, {
    margin: '0px 100px -50px 0px',
    once,
  });

  return (
    <AnimatedFadeUp
      ref={ref}
      initial={{
        opacity: 0,
        x: -30,
      }}
      animate={
        isInView
          ? {
              opacity: 1,
              x: 0,
            }
          : {}
      }
      transition={
        isInView
          ? {
              delay: 0.1,
              duration: 0.6,
              ease: [0.6, 0.05, -0.01, 0.9],
            }
          : {}
      }
    >
      {children}
    </AnimatedFadeUp>
  );
}
