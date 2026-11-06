import { motion } from 'framer-motion';
import type { CSSProperties, ElementType, ReactNode } from 'react';

type FadeInProps = {
  as?: ElementType;
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
};

const components = new Map<ElementType, ElementType>();

function motionFor(as: ElementType) {
  if (!components.has(as)) {
    components.set(as, motion.create(as as 'div') as ElementType);
  }
  return components.get(as)!;
}

export default function FadeIn({ as = 'div', delay = 0, duration = 0.7, x = 0, y = 30, className, style, children }: FadeInProps) {
  const Component = motionFor(as);
  return (
    <Component
      className={className}
      style={style}
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '50px', amount: 0 }}
      transition={{ delay, duration, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </Component>
  );
}
