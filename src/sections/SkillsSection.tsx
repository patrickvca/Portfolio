import FadeIn from '../components/FadeIn';
import { skills } from '../data';

export default function SkillsSection() {
  return (
    <section id="habilidades" className="rounded-t-[40px] bg-white px-5 py-20 text-ink sm:rounded-t-[50px] sm:px-8 sm:py-24 md:rounded-t-[60px] md:px-10 md:py-32">
      <h2 className="mb-16 text-center font-black uppercase leading-none tracking-tight sm:mb-20 md:mb-28" style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}>
        Habilidades
      </h2>

      <ul className="mx-auto max-w-5xl">
        {skills.map((skill, index) => (
          <FadeIn
            as="li"
            key={skill.name}
            delay={index * 0.1}
            className="flex items-center gap-6 py-8 sm:gap-10 sm:py-10 md:gap-14 md:py-12"
            style={{ borderTop: index === 0 ? undefined : '1px solid rgba(12, 12, 12, 0.15)' }}
          >
            <span aria-hidden="true" className="shrink-0 font-black leading-none" style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}>
              {String(index + 1).padStart(2, '0')}
            </span>
            <div className="flex flex-col gap-2">
              <h3 className="font-medium uppercase" style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}>
                {skill.name}
              </h3>
              <p className="max-w-2xl font-light leading-relaxed opacity-60" style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)' }}>
                {skill.description}
              </p>
            </div>
          </FadeIn>
        ))}
      </ul>
    </section>
  );
}
