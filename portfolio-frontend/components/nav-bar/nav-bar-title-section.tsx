import { ReactNode } from 'react';
import Link from 'next/link';
import { routes } from '@/configs/routes';

export function NavBarTitleSection({ children }: { children: ReactNode }) {
  return (
    <Link
      href={routes.HOME.path}
      className={
        'bg-background border-b-4 border-white p-4 text-left text-4xl text-nowrap uppercase hover:bg-white hover:text-black'
      }
    >
      {children}
    </Link>
  );
}
