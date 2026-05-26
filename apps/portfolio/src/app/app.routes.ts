import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home-page/home-page').then(
        (page) => page.HomePageComponent,
      ),
    title: 'Shawn Shen | Full Stack Software Engineer',
  },
  {
    path: 'projects/document-intelligence-platform',
    loadComponent: () =>
      import('./pages/case-study-page/case-study-page').then(
        (page) => page.CaseStudyPageComponent,
      ),
    title: 'Document Intelligence Platform | Shawn Shen',
  },
  { path: '**', redirectTo: '' },
];
