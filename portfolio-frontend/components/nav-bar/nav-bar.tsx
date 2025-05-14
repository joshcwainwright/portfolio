'use client';

import { usePathname } from 'next/navigation';
import { routes } from '@/configs/routes';
import { CONST } from '@/configs/constants';
import { NavBarTitleSection } from '@/components/nav-bar/nav-bar-title-section';
import { NavBarSection } from '@/components/nav-bar/nav-bar-section';

export default function NavBar() {
  const pathname = usePathname();
  const validRoutes = Object.values(routes).slice(1);
  console.log(validRoutes);

  return (
    <div
      className={`${pathname === routes.HOME.path && 'hidden'} animate-float m-4 flex w-fit flex-col border-4 border-white`}
    >
      <NavBarTitleSection>
        <span>{CONST.name}</span>
      </NavBarTitleSection>
      {validRoutes.map((route, index) => (
        <NavBarSection
          key={index}
          index={index}
          route={route}
          pathname={pathname}
          isLast={index === validRoutes.length - 1}
        />
      ))}
    </div>
  );
}
