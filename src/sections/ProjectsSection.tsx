import { motion, useScroll, useTransform } from 'framer-motion';
import type { MotionValue } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { useRef } from 'react';
import FadeIn from '../components/FadeIn';
import { GhostButton } from '../components/Buttons';
import { projects } from '../data';
import type { Project } from '../data';

type CardProps = { project: Project; index: number; total: number; progress: MotionValue<number> };

function ProjectCard({ project, index, total, progress }: CardProps) {
  const targetScale = 1 - (total - 1 - index) * 0.03;
  const scale = useTransform(progress, [index / total, 1], [1, targetScale]);

  return (
    <div className="sticky top-24 h-[85vh] md:top-32">
      <motion.article
        style={{ scale, top: `${index * 14}px` }}
        className="relative origin-top rounded-[40px] border-2 border-mist bg-ink p-4 sm:rounded-[50px] sm:p-6 md:rounded-[60px] md:p-8"
      >
        <div className="grid items-center gap-5 md:grid-cols-[2fr_3fr] md:gap-8">
          <div className="flex flex-col gap-3 px-2 md:px-3">
            <div className="flex items-end gap-4">
              <span aria-hidden="true" className="font-black leading-none text-mist" style={{ fontSize: 'clamp(3rem, 7vw, 100px)' }}>
                {String(index + 1).padStart(2, '0')}
              </span>
              <p className="pb-1 text-sm font-light uppercase tracking-widest text-mist/70">{project.tag}</p>
            </div>
            <h3 className="font-medium uppercase leading-tight text-mist" style={{ fontSize: 'clamp(1.3rem, 2.6vw, 2.25rem)' }}>
              {project.name}
            </h3>
            <p className="font-light leading-relaxed text-mist/80" style={{ fontSize: 'clamp(0.9rem, 1.3vw, 1.1rem)' }}>
              {project.description}
            </p>
            {project.links.length > 0 && (
              <div className="mt-2 flex flex-wrap gap-2">
                {project.links.map((link) => (
                  <GhostButton key={link.href} href={link.href} external>
                    {link.label}
                    <ArrowUpRight size={18} aria-hidden="true" />
                  </GhostButton>
                ))}
              </div>
            )}
          </div>
          <img
            src={project.image}
            alt={project.alt}
            loading="lazy"
            className="aspect-[16/10] w-full rounded-[32px] object-cover sm:rounded-[40px] md:rounded-[48px]"
          />
        </div>
      </motion.article>
    </div>
  );
}

export default function ProjectsSection() {
  const listRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: listRef, offset: ['start start', 'end end'] });

  return (
    <section id="projetos" className="relative z-10 -mt-10 rounded-t-[40px] bg-ink px-5 py-20 sm:-mt-12 sm:rounded-t-[50px] sm:px-8 sm:py-24 md:-mt-14 md:rounded-t-[60px] md:px-10 md:py-32">
      <FadeIn delay={0} y={40}>
        <h2 className="hero-heading mb-16 text-center font-black uppercase leading-none tracking-tight sm:mb-20" style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}>
          Projetos
        </h2>
      </FadeIn>

      <div ref={listRef} className="mx-auto max-w-6xl">
        {projects.map((project, index) => (
          <ProjectCard key={project.name} project={project} index={index} total={projects.length} progress={scrollYProgress} />
        ))}
      </div>
    </section>
  );
}
