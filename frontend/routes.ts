import { Route } from '@vaadin/router';
import './views/carousel/carousel-view';
import './views/dialog/dialog-view';
import './views/grocery/grocery-view';
import './views/main-layout';
import './views/vaadin-dialog/vaadin-dialog-view';

export type ViewRoute = Route & {
  title?: string;
  icon?: string;
  children?: ViewRoute[];
};

export const views: ViewRoute[] = [
  // place routes below (more info https://hilla.dev/docs/routing)
  {
    path: '',
    component: 'carousel-view',
    icon: '',
    title: '',
  },
  {
    path: 'carousel',
    component: 'carousel-view',
    icon: 'la la-list-alt',
    title: 'Carousel',
  },
  {
    path: 'grocery',
    component: 'grocery-view',
    icon: 'la la-list-alt',
    title: 'Grocery',
  },
  {
    path: 'dialog',
    component: 'dialog-view',
    icon: 'la la-list-alt',
    title: 'Dialog',
  },
  {
    path: 'vaadin-dialog',
    component: 'vaadin-dialog-view',
    icon: 'la la-list-alt',
    title: 'vaadin dialog',
  },
];
export const routes: ViewRoute[] = [
  {
    path: '',
    component: 'main-layout',
    children: [...views],
  },
];
