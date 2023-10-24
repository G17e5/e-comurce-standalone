import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortflioComponent } from './portflio/portflio.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { UpdatePasswordComponent } from './update-password/update-password.component';
import { AccountInfoComponent } from './account-info/account-info.component';
import { UserSettingComponent } from './user-setting/user-setting.component';
import { PaymentHistoryComponent } from './payment-history/payment-history.component';

const routes: Routes = [
  {path:"" , redirectTo:"portflio" , pathMatch:"full"} ,
  {path:"portflio" , component:PortflioComponent , children:[
    {path:"" , redirectTo:"accountInfo" , pathMatch:"full"},
    {path:"accountInfo" , component:AccountInfoComponent},
    {path:"userSetting" , component:UserSettingComponent},
    {path:"payment-history/:uId" , component:PaymentHistoryComponent},

  ]},
  {path:"userInfo" , component:UserInfoComponent},
  {path:"updatePassword" , component:UpdatePasswordComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingRoutingModule { }

