import { useEffect, useRef } from 'react';
import type { RefObject } from 'react';
import { certificates, projects } from '../data';

const TILE = 420 + 12;
const rowOne = projects.map((project) => project.image);
const rowTwo = certificates.map((certificate) => certificate.image);

function Row({ list, rowRef }: { list: string[]; rowRef: RefObject<HTMLDivElement> }) {
  return (
    <div ref={rowRef} className="flex w-max gap-3" style={{ willChange: 'transform' }}>
      {[...list, ...list, ...list].map((src, index) => (
        <img key={index} src={src} alt="" loading="lazy" className="h-[270px] w-[420px] shrink-0 rounded-2xl object-cover" />
      ))}
    </div>
  );
}

export default function MarqueeSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const rowOneRef = useRef<HTMLDivElement>(null);
  const rowTwoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const setOne = rowOne.length * TILE;
    const setTwo = rowTwo.length * TILE;
    const wrap = (value: number, size: number) => ((value % size) + size) % size;
    let frame = 0;

    const update = () => {
      frame = 0;
      if (!sectionRef.current || !rowOneRef.current || !rowTwoRef.current) return;
      const sectionTop = sectionRef.current.getBoundingClientRect().top + window.scrollY;
      const offset = reduced ? 200 : (window.scrollY - sectionTop + window.innerHeight) * 0.3;
      // O deslocamento dá a volta dentro de uma cópia da lista, então a faixa nunca fica vazia.
      rowOneRef.current.style.transform = `translateX(${wrap(offset - 200, setOne) - setOne}px)`;
      rowTwoRef.current.style.transform = `translateX(${-wrap(offset - 200, setTwo)}px)`;
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section ref={sectionRef} aria-hidden="true" className="flex flex-col gap-3 overflow-hidden bg-ink pb-10 pt-24 sm:pt-32 md:pt-40">
      <Row list={rowOne} rowRef={rowOneRef} />
      <Row list={rowTwo} rowRef={rowTwoRef} />
    </section>
  );
}
