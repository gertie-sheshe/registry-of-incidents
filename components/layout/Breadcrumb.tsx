import Link from 'next/link';

import type { BreadcrumbItem } from '@/types';

type BreadcrumbProps = {
  items: BreadcrumbItem[];
};

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-2 font-sans text-xs text-secondary">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={`${item.label}-${index}`} className="flex items-center gap-2">
              {isLast || !item.href ? (
                <span className={isLast ? 'text-charcoal' : 'text-secondary'}>
                  {item.label}
                </span>
              ) : (
                <Link href={item.href} className="text-secondary no-underline hover:underline">
                  {item.label}
                </Link>
              )}
              {!isLast ? <span aria-hidden="true">›</span> : null}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
