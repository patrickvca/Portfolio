import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import FadeIn from '../components/FadeIn';
import Magnet from '../components/Magnet';
import { ContactButton } from '../components/Buttons';
import { heroText, images, navLinks } from '../data';

const linkClass = 'font-medium uppercase tracking-wider text-mist transition-opacity duration-200 hover:opacity-70';

function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <nav aria-label="Navegação principal" className="relative px-6 pt-6 md:px-10 md:pt-8">
      <div className="hidden items-center justify-between sm:flex">
        {navLinks.map((link) => (
          <a key={link.href} href={link.href} className={`${linkClass} text-sm md:text-lg lg:text-[1.4rem]`}>
            {link.label}
          </a>
        ))}
      </div>

      <div className="flex justify-end sm:hidden">
        <button
          type="button"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
          aria-controls="menu-mobile"
          onClick={() => setOpen(!open)}
          className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-mist text-mist"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div id="menu-mobile" className="absolute inset-x-6 top-full mt-3 flex flex-col rounded-3xl border-2 border-mist bg-ink p-3 sm:hidden">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)} className={`${linkClass} px-4 py-3 text-base`}>
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

export default function HeroSection() {
  return (
    <header id="inicio" className="relative flex h-screen flex-col" style={{ height: '100svh', overflowX: 'clip' }}>
      <FadeIn delay={0} y={-20} className="relative z-30">
        <Navbar />
      </FadeIn>

      <div className="overflow-hidden">
        <FadeIn delay={0.15} y={40}>
          <h1 className="hero-heading mt-6 w-full whitespace-nowrap text-center text-[12.4vw] font-black uppercase leading-none tracking-tight sm:mt-4 md:mt-2">
            Oi, sou Patrick
          </h1>
        </FadeIn>
      </div>

      <div className="absolute left-1/2 top-1/2 z-10 w-[280px] -translate-x-1/2 -translate-y-1/2 sm:bottom-0 sm:top-auto sm:w-[360px] sm:translate-y-0 md:w-[440px] lg:w-[520px]">
        <FadeIn delay={0.6} y={30}>
          <Magnet padding={150} strength={3}>
            <img src={images.portrait} alt="Caricatura de Patrick Oliveira" className="block w-full select-none" draggable={false} />
          </Magnet>
        </FadeIn>
      </div>

      <div className="relative z-20 mt-auto flex items-end justify-between gap-4 px-6 pb-7 sm:pb-8 md:px-10 md:pb-10">
        <FadeIn delay={0.35} y={20}>
          <p
            className="max-w-[160px] font-light uppercase leading-snug tracking-wide text-mist sm:max-w-[220px] md:max-w-[260px]"
            style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}
          >
            {heroText}
          </p>
        </FadeIn>
        <FadeIn delay={0.5} y={20}>
          <ContactButton href="#contato">Fale comigo</ContactButton>
        </FadeIn>
      </div>
    </header>
  );
}
