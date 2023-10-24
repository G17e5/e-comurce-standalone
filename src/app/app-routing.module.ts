import { authGuard } from './auth.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CategoriesComponent } from './categories/categories.component';
import { CartComponent } from './cart/cart.component';
import { BrandsComponent } from './brands/brands.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductComponent } from './product/product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ModelBrandComponent } from './model-brand/model-brand.component';
import { SubCategoriesComponent } from './sub-categories/sub-categories.component';
import { WhishlistComponent } from './whishlist/whishlist.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { NewPassComponent } from './new-pass/new-pass.component';
import { LoadingComponent } from './loading/loading.component';

const routes: Routes = [
  {path:"" , redirectTo:"home" , pathMatch:"full"},
  {path:"home" , canActivate:[authGuard] , component:HomeComponent},
  {path:"product",canActivate:[authGuard] , component:ProductComponent},
  {path:"categories",canActivate:[authGuard] , component:CategoriesComponent},
  {path:"cart" ,canActivate:[authGuard], component:CartComponent},
  {path:"brands",canActivate:[authGuard] , component:BrandsComponent},
  {path:"productDetails/:id",canActivate:[authGuard] , component:ProductDetailsComponent},
  {path:"checkout/:cId",canActivate:[authGuard] , component:CheckoutComponent},
  {path:"modelBrand/:bId",canActivate:[authGuard] , component:ModelBrandComponent},
  {path:"subCategory/:subId/:name",canActivate:[authGuard] , component:SubCategoriesComponent},
  {path:"whishlist",canActivate:[authGuard] , component:WhishlistComponent},
  {path:"login" , component:LoginComponent},
  {path:"forgetPaassword" , component:ForgetpasswordComponent},
  {path:"sendValidation" , component:ResetPasswordComponent},
  {path:"resetPassword" , component:NewPassComponent},
  {path:"register" , component:RegisterComponent},
  {path:"loading" , component:LoadingComponent},
  {path:"Setting",canActivate:[authGuard] , loadChildren:()=>import('./setting/setting.module').then((x)=>x.SettingModule)},
  {path:"**" , component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes , {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
