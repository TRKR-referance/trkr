import { Routes } from '@angular/router';
import { AuthorizationComponent } from './authorization.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';

export const AuthorizationRouting: Routes = [
  {
    path: '',
    component: AuthorizationComponent,
    children: [
      {
        path: 'sign-in',
        component: SignInComponent
      },
      {
        path: '**',
        redirectTo: 'sign-in'
      }
    ]
  },
];
