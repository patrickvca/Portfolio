import AnimatedText from '../components/AnimatedText';
import FadeIn from '../components/FadeIn';
import { ContactButton } from '../components/Buttons';
import { about, images } from '../data';

const corners = [
  { src: images.objects.code, className: 'left-[1%] top-[4%] w-[120px] sm:left-[2%] sm:w-[160px] md:left-[4%] md:w-[210px]', delay: 0.1, x: -80 },
  { src: images.objects.database, className: 'bottom-[8%] left-[3%] w-[100px] sm:left-[6%] sm:w-[140px] md:left-[10%] md:w-[180px]', delay: 0.25, x: -80 },
  { src: images.objects.terminal, className: 'right-[1%] top-[4%] w-[120px] sm:right-[2%] sm:w-[160px] md:right-[4%] md:w-[210px]', delay: 0.15, x: 80 },
  { src: images.objects.robot, className: 'bottom-[8%] right-[3%] w-[110px] sm:right-[6%] sm:w-[150px] md:right-[10%] md:w-[190px]', delay: 0.3, x: 80 },
];

export default function AboutSection() {
  return (
    <section id="sobre" className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-5 py-40 sm:px-8 md:px-10 md:py-20">
      {corners.map((corner) => (
        <FadeIn key={corner.src} delay={corner.delay} x={corner.x} y={0} duration={0.9} className={`pointer-events-none absolute ${corner.className}`}>
          <img src={corner.src} alt="" loading="lazy" className="w-full" />
        </FadeIn>
      ))}

      <div className="relative z-10 flex flex-col items-center gap-16 sm:gap-20 md:gap-24">
        <div className="flex flex-col items-center gap-10 sm:gap-14 md:gap-16">
          <FadeIn delay={0} y={40}>
            <h2 className="hero-heading text-center font-black uppercase leading-none tracking-tight" style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}>
              Sobre mim
            </h2>
          </FadeIn>
          <div className="flex max-w-[560px] flex-col gap-6 text-center">
            <h3 className="font-medium uppercase tracking-widest text-mist" style={{ fontSize: 'clamp(0.85rem, 1.4vw, 1rem)' }}>
              {about.subtitle}
            </h3>
            {about.paragraphs.map((paragraph) => (
              <AnimatedText key={paragraph} text={paragraph} className="font-medium leading-relaxed text-mist [font-size:clamp(1rem,2vw,1.35rem)]" />
            ))}
          </div>
        </div>
        <ContactButton href="#contato">Fale comigo</ContactButton>
      </div>
    </section>
  );
}
