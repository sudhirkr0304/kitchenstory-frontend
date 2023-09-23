import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { AdminloginComponent } from './components/adminlogin/adminlogin.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AdminmainComponent } from './components/adminmain/adminmain.component';
import { AdminchangepasswordComponent } from './components/adminchangepassword/adminchangepassword.component';
import { AdminaddproductComponent } from './components/adminaddproduct/adminaddproduct.component';
import { CheckoutComponent } from './components/checkout/checkout.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminloginComponent,
    AdminmainComponent,
    AdminchangepasswordComponent,
    AdminaddproductComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
