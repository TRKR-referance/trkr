import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyProfileComponent } from './components/company-profile/company-profile.component';
import { MytrkrComponentsModule } from '../../../../mytrkr-components/mytrkr-components.module';
import { MytrkrIconsModule } from '../../../../mytrkr-icons/mytrkr-icons.module';
import { RouterModule } from '@angular/router';
import { CompanyProfileRouting } from './company-profile.routing';


@NgModule({
  declarations: [
    CompanyProfileComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(CompanyProfileRouting),
    MytrkrComponentsModule,
    MytrkrIconsModule
  ]
})
export class CompanyProfileModule {}
