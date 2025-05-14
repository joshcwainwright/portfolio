'use client';

import { usePathname } from 'next/navigation';
import { routes } from '@/configs/routes';
import { CONST } from '@/configs/constants';

export default function NavBar() {
  const pathname = usePathname();
  return (
    <div
      className={`${pathname === routes.HOME.path && 'hidden'} animate-float m-4 flex w-fit flex-col border-4 border-white p-4`}
    >
      <span className={'text-left text-2xl uppercase'}>{CONST.name}</span>
    </div>
  );
}
