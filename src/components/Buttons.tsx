import type { ReactNode } from 'react';

type LinkProps = { href: string; external?: boolean; children: ReactNode };

const externalProps = { target: '_blank', rel: 'noopener' };

export function ContactButton({ href, external, children }: LinkProps) {
  return (
    <a
      href={href}
      {...(external ? externalProps : {})}
      className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-3 text-xs font-medium uppercase tracking-widest text-white transition-transform duration-200 hover:scale-105 sm:px-10 sm:py-3.5 sm:text-sm md:px-12 md:py-4 md:text-base"
      style={{
        background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
        boxShadow: '0px 4px 4px rgba(181, 1, 167, 0.25), inset 4px 4px 12px #7721B1',
        outline: '2px solid #FFFFFF',
        outlineOffset: '-3px',
      }}
    >
      {children}
    </a>
  );
}

export function GhostButton({ href, external, children }: LinkProps) {
  return (
    <a
      href={href}
      {...(external ? externalProps : {})}
      className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-mist px-8 py-3 text-sm font-medium uppercase tracking-widest text-mist transition-colors duration-200 hover:bg-mist/10 sm:px-10 sm:py-3.5 sm:text-base"
    >
      {children}
    </a>
  );
}
