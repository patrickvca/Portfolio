import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import FadeIn from '../components/FadeIn';
import { certificateFilters, certificates } from '../data';

type Certificate = (typeof certificates)[number];

function CertificateModal({ certificate, onClose }: { certificate: Certificate; onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const previous = document.activeElement as HTMLElement | null;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    closeRef.current?.focus();
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
      previous?.focus();
    };
  }, [onClose]);

  return (
    <motion.div
      role="dialog"
      aria-modal="true"
      aria-label="Visualização de certificado"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 sm:p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <button
        ref={closeRef}
        type="button"
        aria-label="Fechar certificado"
        onClick={onClose}
        className="fixed right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border-2 border-mist bg-ink text-mist"
      >
        <X size={20} />
      </button>
      <img src={certificate.image} alt={certificate.alt} className="max-h-[88vh] w-auto rounded-3xl" />
    </motion.div>
  );
}

export default function CertificatesSection() {
  const [filter, setFilter] = useState('todos');
  const [selected, setSelected] = useState<Certificate | null>(null);
  const visible = certificates.filter((certificate) => filter === 'todos' || certificate.category === filter);

  return (
    <section id="certificados" className="relative z-10 bg-ink px-5 pb-20 sm:px-8 sm:pb-24 md:px-10 md:pb-32">
      <FadeIn delay={0} y={40}>
        <h2 className="hero-heading mb-12 text-center font-black uppercase leading-none tracking-tight sm:mb-16" style={{ fontSize: 'clamp(2.6rem, 11vw, 160px)' }}>
          Certificados
        </h2>
      </FadeIn>

      <div role="group" aria-label="Categorias de certificados" className="mb-10 flex flex-wrap justify-center gap-2">
        {certificateFilters.map((item) => (
          <button
            key={item.id}
            type="button"
            aria-pressed={filter === item.id}
            onClick={() => setFilter(item.id)}
            className={`rounded-full border-2 border-mist px-5 py-2 text-sm font-medium uppercase tracking-widest transition-colors duration-200 ${
              filter === item.id ? 'bg-mist text-ink' : 'text-mist hover:bg-mist/10'
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>

      <div className="mx-auto grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((certificate) => (
          <button
            key={certificate.name}
            type="button"
            onClick={() => setSelected(certificate)}
            className="overflow-hidden rounded-[32px] border-2 border-mist/30 text-left transition-colors duration-200 hover:border-mist"
          >
            <img src={certificate.image} alt={certificate.alt} loading="lazy" className="aspect-[4/3] w-full object-cover" />
            <span className="block px-5 py-4 font-medium uppercase tracking-wider text-mist">{certificate.name}</span>
          </button>
        ))}
      </div>

      <AnimatePresence>{selected && <CertificateModal certificate={selected} onClose={() => setSelected(null)} />}</AnimatePresence>
    </section>
  );
}
