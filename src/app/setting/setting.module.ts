import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingRoutingModule } from './setting-routing.module';
import { PortflioComponent } from './portflio/portflio.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UpdatePasswordComponent } from './update-password/update-password.component';
import { SloadingComponent } from './sloading/sloading.component';
import { AccountInfoComponent } from './account-info/account-info.component';
import { UserSettingComponent } from './user-setting/user-setting.component';
import { PaymentHistoryComponent } from './payment-history/payment-history.component';



@NgModule({
  declarations: [
    PortflioComponent,
    UserInfoComponent,
    UpdatePasswordComponent,
    SloadingComponent,
    AccountInfoComponent,
    UserSettingComponent,
    PaymentHistoryComponent

  ],
  imports: [
    CommonModule,
    SettingRoutingModule,
    ReactiveFormsModule
  ]
})
export class SettingModule { }
