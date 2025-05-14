export enum ROUTES {
  HOME = 'HOME',
  ABOUT = 'ABOUT',
  EXPERIENCE = 'EXPERIENCE',
  SKILLS = 'SKILLS',
  PROJECTS = 'PROJECTS',
  CONTACT = 'CONTACT',
}

export interface Route {
  label: string;
  path: string;
}

export const routes: { [key in ROUTES]: Route } = {
  [ROUTES.HOME]: {
    label: 'Home',
    path: '/',
  },
  [ROUTES.ABOUT]: {
    label: 'About',
    path: '/about',
  },
  [ROUTES.EXPERIENCE]: {
    label: 'Experience',
    path: '/experience',
  },
  [ROUTES.SKILLS]: {
    label: 'Skills',
    path: '/skills',
  },
  [ROUTES.PROJECTS]: {
    label: 'Projects',
    path: '/projects',
  },
  [ROUTES.CONTACT]: {
    label: 'Contact',
    path: '/contact',
  },
};
