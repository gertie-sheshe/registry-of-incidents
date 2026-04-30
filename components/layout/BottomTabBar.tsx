import Link from 'next/link';

import { BOTTOM_TAB_ITEMS } from '@/lib/constants';

export default function BottomTabBar() {
  return (
    <nav
      aria-label="Bottom navigation"
      className="fixed bottom-0 left-0 right-0 z-40 flex border-t border-rule bg-cream lg:hidden"
    >
      {BOTTOM_TAB_ITEMS.map((item, index) => {
        // Phase 5 will replace this with route-based active state logic.
        const isActive = index === 0;

        return (
          <Link
            key={item.href}
            href={item.href}
            className={`flex flex-1 flex-col items-center py-2 font-sans text-[11px] leading-tight no-underline ${
              isActive ? 'text-amber' : 'text-secondary'
            }`}
          >
            <span>{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
