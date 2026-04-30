import Link from 'next/link';

import { FOOTER_COPY, FOOTER_LINKS, LEGAL_LINE } from '@/lib/constants';

export function SiteFooter() {
  return (
    <footer className="border-t border-rule px-10 py-7">
      <div className="flex items-start justify-between gap-10">
        <div>
          <p className="font-serif text-[14px] text-charcoal">{FOOTER_COPY.institutionName}</p>
          <p className="mt-1 font-sans text-[12px] text-secondary">{FOOTER_COPY.address}</p>
          <p className="mt-0.5 font-mono text-[10px] text-secondary">{FOOTER_COPY.founded}</p>
        </div>

        <nav aria-label="Footer links" className="flex items-start gap-6">
          {FOOTER_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-sans text-[12px] text-secondary no-underline"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>

      <div className="mt-4 border-t border-rule pt-3 text-center">
        <p className="font-sans text-[10.5px] leading-relaxed text-secondary">{LEGAL_LINE}</p>
      </div>
    </footer>
  );
}
