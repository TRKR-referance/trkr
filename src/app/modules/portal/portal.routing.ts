import { Routes } from '@angular/router';
import { PortalComponent } from './portal.component';

export const PortalRouting: Routes = [
  {
    path: '',
    component: PortalComponent,
    children: [
      {
        path: 'settings/company-profile',
        loadChildren: () => import('./pages/company-profile/company-profile.module').then(m => m.CompanyProfileModule)
      },
      {
        path: 'settings/user-profile',
        loadChildren: () => import('./pages/user-profile/user-profile.module').then(m => m.UserProfileModule)
      },
      {
        path: 'settings/users',
        loadChildren: () => import('./pages/users/users.module').then(m => m.UsersModule)
      }
    ]
  },
];
