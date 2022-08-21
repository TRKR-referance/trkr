import { Routes } from '@angular/router';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const AppRouting: Routes = [
  {
    path: 'authorization',
    loadChildren: () => import('./modules/authorization/authorization.module').then(m => m.AuthorizationModule)
  },
  {
    path: '',
    loadChildren: () => import('./modules/portal/portal.module').then(m => m.PortalModule)
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];
