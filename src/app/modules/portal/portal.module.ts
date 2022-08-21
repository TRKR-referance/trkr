import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortalComponent } from './portal.component';
import { RouterModule } from '@angular/router';
import { PortalRouting } from './portal.routing';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { MytrkrIconsModule } from '../../mytrkr-icons/mytrkr-icons.module';


@NgModule({
  declarations: [
    PortalComponent,
    NavBarComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(PortalRouting),
    MytrkrIconsModule
  ]
})
export class PortalModule {}
