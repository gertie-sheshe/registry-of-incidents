'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import type { NavItem } from '@/types';

import { BOTTOM_TAB_ITEMS } from '@/lib/constants';

const HOME_TAB: NavItem = { label: 'Home', href: '/' };

const TAB_ITEMS: NavItem[] = [HOME_TAB, ...BOTTOM_TAB_ITEMS];

function isTabActive(pathname: string, href: string): boolean {
  if (href === '/') {
    return pathname === '/';
  }
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function BottomTabBar() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Bottom navigation"
      className="fixed bottom-0 left-0 right-0 z-40 flex border-t border-rule bg-cream lg:hidden"
    >
      {TAB_ITEMS.map((item) => {
        const isActive = isTabActive(pathname, item.href);

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
