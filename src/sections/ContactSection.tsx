import FadeIn from '../components/FadeIn';
import { ContactButton, GhostButton } from '../components/Buttons';
import { contact } from '../data';

export default function ContactSection() {
  return (
    <section id="contato" className="relative z-10 flex flex-col items-center gap-10 bg-ink px-5 pb-24 pt-10 text-center sm:px-8 md:gap-14 md:px-10 md:pb-32">
      <FadeIn delay={0} y={20}>
        <p className="font-medium uppercase tracking-widest text-mist">Contato</p>
      </FadeIn>
      <FadeIn delay={0.1} y={40}>
        <h2 className="hero-heading max-w-5xl font-black uppercase leading-none tracking-tight" style={{ fontSize: 'clamp(2.25rem, 7vw, 100px)' }}>
          {contact.heading}
        </h2>
      </FadeIn>
      <FadeIn delay={0.2} y={20} className="flex flex-wrap items-center justify-center gap-3">
        <ContactButton href={contact.linkedin} external>LinkedIn</ContactButton>
        <GhostButton href={contact.github} external>GitHub</GhostButton>
        <GhostButton href={contact.email}>E-mail</GhostButton>
        <GhostButton href={contact.whatsapp} external>WhatsApp</GhostButton>
      </FadeIn>
    </section>
  );
}
