import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SaveIconComponent } from './save-icon/save-icon.component';
import { PersonAddComponent } from './person-add/person-add.component';
import { MytrkrLogoComponent } from './mytrkr-logo/mytrkr-logo.component';
import { LeftArrowComponent } from './left-arrow/left-arrow.component';
import { DispatchBoardIconComponent } from './dispatch-board-icon/dispatch-board-icon.component';
import { LoadBoardIconComponent } from './load-board-icon/load-board-icon.component';
import { MessagesIconComponent } from './messages-icon/messages-icon.component';
import { EquipmentIconComponent } from './equipment-icon/equipment-icon.component';
import { DriversIconComponent } from './drivers-icon/drivers-icon.component';
import { BrokersIconComponent } from './brokers-icon/brokers-icon.component';
import { IntegrationsIconComponent } from './integrations-icon/integrations-icon.component';
import { SettingsIconComponent } from './settings-icon/settings-icon.component';
import { RightChevronIconComponent } from './right-chevron-icon/right-chevron-icon.component';
import { UnfoldMoreIconComponent } from './unfold-more-icon/unfold-more-icon.component';
import { UserProfileIconComponent } from './user-profile-icon/user-profile-icon.component';
import { LogoutIconComponent } from './logout-icon/logout-icon.component';


@NgModule({
  declarations: [
    SaveIconComponent,
    PersonAddComponent,
    MytrkrLogoComponent,
    LeftArrowComponent,
    DispatchBoardIconComponent,
    LoadBoardIconComponent,
    MessagesIconComponent,
    EquipmentIconComponent,
    DriversIconComponent,
    BrokersIconComponent,
    IntegrationsIconComponent,
    SettingsIconComponent,
    RightChevronIconComponent,
    UnfoldMoreIconComponent,
    UserProfileIconComponent,
    LogoutIconComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [SaveIconComponent, PersonAddComponent, MytrkrLogoComponent, LeftArrowComponent, DispatchBoardIconComponent, LoadBoardIconComponent, MessagesIconComponent, EquipmentIconComponent, DriversIconComponent, BrokersIconComponent, SettingsIconComponent, IntegrationsIconComponent, RightChevronIconComponent, UnfoldMoreIconComponent, UserProfileIconComponent, LogoutIconComponent]
})
export class MytrkrIconsModule {}
