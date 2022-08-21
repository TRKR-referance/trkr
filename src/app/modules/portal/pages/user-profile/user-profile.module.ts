import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { RouterModule } from '@angular/router';
import { UserProfileRouting } from './user-profile.routing';
import { MytrkrComponentsModule } from '../../../../mytrkr-components/mytrkr-components.module';
import { MytrkrIconsModule } from '../../../../mytrkr-icons/mytrkr-icons.module';


@NgModule({
  declarations: [
    UserProfileComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(UserProfileRouting),
    MytrkrComponentsModule,
    MytrkrIconsModule
  ]
})
export class UserProfileModule {}
