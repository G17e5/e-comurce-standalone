import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CategoriesComponent } from './categories/categories.component';
import { CartComponent } from './cart/cart.component';
import { BrandsComponent } from './brands/brands.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ProductComponent } from './product/product.component';
import{HttpClientModule}from "@angular/common/http";
import { ProductDetailsComponent } from './product-details/product-details.component';
import{BrowserAnimationsModule}from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { MainsliderComponent } from './mainslider/mainslider.component';
import { CategoreSliderComponent } from './categore-slider/categore-slider.component';
import { SearchPipe } from './search.pipe';
import { CheckoutComponent } from './checkout/checkout.component';
import { CommonModule } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';
import { ModelBrandComponent } from './model-brand/model-brand.component';
import { SubCategoriesComponent } from './sub-categories/sub-categories.component';
import { WhishlistComponent } from './whishlist/whishlist.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { NewPassComponent } from './new-pass/new-pass.component';
import { LoadingComponent } from './loading/loading.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    CategoriesComponent,
    CartComponent,
    BrandsComponent,
    LoginComponent,
    RegisterComponent,
    NotFoundComponent,
    NavbarComponent,
    FooterComponent,
    ProductComponent,
    ProductDetailsComponent,
    MainsliderComponent,
    CategoreSliderComponent,
    SearchPipe,
    CheckoutComponent,
    ModelBrandComponent,
    SubCategoriesComponent,
    WhishlistComponent,
    ForgetpasswordComponent,
    ResetPasswordComponent,
    NewPassComponent,
    LoadingComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CarouselModule,
    FormsModule,CommonModule,
    ToastrModule.forRoot()

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
