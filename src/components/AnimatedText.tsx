import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import type { MotionValue } from 'framer-motion';
import { useRef } from 'react';

type CharProps = { char: string; progress: MotionValue<number>; range: [number, number] };

function Char({ char, progress, range }: CharProps) {
  const opacity = useTransform(progress, range, [0.2, 1]);
  return (
    <span className="relative">
      <span className="invisible">{char}</span>
      <motion.span className="absolute left-0 top-0" style={{ opacity }}>
        {char}
      </motion.span>
    </span>
  );
}

export default function AnimatedText({ text, className }: { text: string; className?: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const reduced = useReducedMotion();
  // A revelação termina quando o fim do parágrafo entra na tela, para o texto já estar legível.
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end 0.9'] });

  const words = text.split(' ');
  const wordStarts = words.map((_, index) => words.slice(0, index).join(' ').length + (index ? 1 : 0));

  return (
    <p ref={ref} className={className}>
      {reduced ? (
        text
      ) : (
        <>
          <span className="sr-only">{text}</span>
          <span aria-hidden="true">
            {words.map((word, wordIndex) => (
              <span key={wordIndex}>
                <span className="inline-block">
                  {[...word].map((char, charIndex) => {
                    const start = (wordStarts[wordIndex] + charIndex) / text.length;
                    return <Char key={charIndex} char={char} progress={scrollYProgress} range={[start, start + 1 / text.length]} />;
                  })}
                </span>{' '}
              </span>
            ))}
          </span>
        </>
      )}
    </p>
  );
}
