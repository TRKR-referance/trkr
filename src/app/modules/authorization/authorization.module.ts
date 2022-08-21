import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorizationComponent } from './authorization.component';
import { RouterModule } from '@angular/router';
import { AuthorizationRouting } from './authorization.routing';
import { SignInComponent } from './pages/sign-in/sign-in.component';


@NgModule({
  declarations: [
    AuthorizationComponent,
    SignInComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(AuthorizationRouting)
  ]
})
export class AuthorizationModule {}
