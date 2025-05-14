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
  id: ROUTES;
}

export const routes: { [key in ROUTES]: Route } = {
  [ROUTES.HOME]: {
    id: ROUTES.HOME,
    label: 'Home',
    path: '/',
  },
  [ROUTES.ABOUT]: {
    id: ROUTES.ABOUT,
    label: 'About',
    path: '/about',
  },
  [ROUTES.EXPERIENCE]: {
    id: ROUTES.EXPERIENCE,
    label: 'Experience',
    path: '/experience',
  },
  [ROUTES.SKILLS]: {
    id: ROUTES.SKILLS,
    label: 'Skills',
    path: '/skills',
  },
  [ROUTES.PROJECTS]: {
    id: ROUTES.PROJECTS,
    label: 'Projects',
    path: '/projects',
  },
  [ROUTES.CONTACT]: {
    id: ROUTES.CONTACT,
    label: 'Contact',
    path: '/contact',
  },
};
