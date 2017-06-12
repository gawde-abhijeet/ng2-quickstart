import { MenuType, RouteInfo } from './navbar.metadata';

export const ROUTES: RouteInfo[] = [
  { path: '', title: 'Angular2 Bootstrap4 Navbar', menuType: MenuType.BRAND },
  { path: 'dashboard', title: 'Dashboard', menuType: MenuType.LEFT },
  { path: 'heroes', title: 'Heroes', menuType: MenuType.LEFT },
];