import { useEffect, useRef, useState } from 'react';
import type { ReactNode } from 'react';

type MagnetProps = {
  padding?: number;
  strength?: number;
  activeTransition?: string;
  inactiveTransition?: string;
  className?: string;
  children: ReactNode;
};

export default function Magnet({
  padding = 150,
  strength = 3,
  activeTransition = 'transform 0.3s ease-out',
  inactiveTransition = 'transform 0.6s ease-in-out',
  className,
  children,
}: MagnetProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const onMove = (event: MouseEvent) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      // O centro desconta o deslocamento atual para o ímã não correr atrás de si mesmo.
      const matrix = new DOMMatrixReadOnly(getComputedStyle(ref.current).transform);
      const distanceX = event.clientX - (rect.left - matrix.m41 + rect.width / 2);
      const distanceY = event.clientY - (rect.top - matrix.m42 + rect.height / 2);
      const inside = Math.abs(distanceX) < rect.width / 2 + padding && Math.abs(distanceY) < rect.height / 2 + padding;

      setActive(inside);
      setPosition(inside ? { x: distanceX / strength, y: distanceY / strength } : { x: 0, y: 0 });
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    return () => window.removeEventListener('mousemove', onMove);
  }, [padding, strength]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        transition: active ? activeTransition : inactiveTransition,
        willChange: 'transform',
      }}
    >
      {children}
    </div>
  );
}
