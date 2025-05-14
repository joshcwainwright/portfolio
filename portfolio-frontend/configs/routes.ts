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
  svgPath?: string;
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
    svgPath:
      'M15 2H9v2H7v6h2V4h6V2zm0 8H9v2h6v-2zm0-6h2v6h-2V4zM4 16h2v-2h12v2H6v4h12v-4h2v6H4v-6z',
  },
  [ROUTES.EXPERIENCE]: {
    id: ROUTES.EXPERIENCE,
    label: 'Experience',
    path: '/experience',
    svgPath: 'M8 3h8v4h6v14H2V7h6V3zm2 4h4V5h-4v2zM4 9v10h16V9H4z',
  },
  [ROUTES.SKILLS]: {
    id: ROUTES.SKILLS,
    label: 'Skills',
    path: '/skills',
    svgPath: 'M5 3H3v18h18V3H5zm0 2h14v14H5V5zm4 7H7v2h2v2h2v-2h2v-2h2v-2h2V8h-2v2h-2v2h-2v2H9v-2z',
  },
  [ROUTES.PROJECTS]: {
    id: ROUTES.PROJECTS,
    label: 'Projects',
    path: '/projects',
    svgPath: 'M5 2h2v12h3v3h7v-7h-3V2h8v8h-3v9h-9v3H2v-8h3V2zm15 6V4h-4v4h4zM8 19v-3H4v4h4v-1z',
  },
  [ROUTES.CONTACT]: {
    id: ROUTES.CONTACT,
    label: 'Contact',
    path: '/contact',
    svgPath: 'M22 4H2v16h20V4zM4 18V6h16v12H4zM8 8H6v2h2v2h2v2h4v-2h2v-2h2V8h-2v2h-2v2h-4v-2H8V8z',
  },
};
