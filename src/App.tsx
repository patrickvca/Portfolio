import HeroSection from './sections/HeroSection';
import MarqueeSection from './sections/MarqueeSection';
import AboutSection from './sections/AboutSection';
import SkillsSection from './sections/SkillsSection';
import ProjectsSection from './sections/ProjectsSection';
import CertificatesSection from './sections/CertificatesSection';
import ContactSection from './sections/ContactSection';

export default function App() {
  return (
    <div className="bg-ink" style={{ overflowX: 'clip' }}>
      <HeroSection />
      <main>
        <MarqueeSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <CertificatesSection />
        <ContactSection />
      </main>
    </div>
  );
}
