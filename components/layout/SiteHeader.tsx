import Link from "next/link";

import InstitutionalSeal from "@/components/ui/InstitutionalSeal";
import { HERO_TITLE, NAV_ITEMS } from "@/lib/constants";

export function SiteHeader(): JSX.Element {
  return (
    <header className="hidden h-14 items-center justify-between border-b border-rule bg-cream px-10 lg:flex">
      <div className="flex items-center gap-3">
        <InstitutionalSeal size={32} />
        <span className="max-w-[220px] font-serif text-[14px] leading-[1.3] text-charcoal">
          {HERO_TITLE}
        </span>
      </div>

      <nav aria-label="Primary navigation" className="flex items-center gap-7">
        {NAV_ITEMS.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="whitespace-nowrap font-sans text-[12.5px] text-charcoal no-underline"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
