export enum MenuType {
  TOP,
  BOTTOM
}

export interface RouteInfo {
  path: string;
  title: string;
  menuType: MenuType;
}