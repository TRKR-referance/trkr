import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './components/users/users.component';
import { MytrkrComponentsModule } from '../../../../mytrkr-components/mytrkr-components.module';
import { MytrkrIconsModule } from '../../../../mytrkr-icons/mytrkr-icons.module';
import { AgGridModule } from 'ag-grid-angular';
import { RouterModule } from '@angular/router';
import { UsersRouting } from './users.routing';


@NgModule({
  declarations: [
    UsersComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(UsersRouting),
    MytrkrComponentsModule,
    MytrkrIconsModule,
    AgGridModule
  ]
})
export class UsersModule {}
