export interface Route {
  label: string;
  href: string;
}

export const routes: Route[] = [
  {
    label: 'About',
    href: '/about',
  },
  {
    label: 'Experience',
    href: '/experience',
  },
  {
    label: 'Skills',
    href: '/skills',
  },
  {
    label: 'Projects',
    href: '/projects',
  },
  {
    label: 'Contact',
    href: '/contact',
  },
];
