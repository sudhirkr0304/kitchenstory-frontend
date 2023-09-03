import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AdminloginComponent } from './components/adminlogin/adminlogin.component';
import { AdminmainComponent } from './components/adminmain/adminmain.component';
import { AdminchangepasswordComponent } from './components/adminchangepassword/adminchangepassword.component';
import { AdminaddproductComponent } from './components/adminaddproduct/adminaddproduct.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {path:'adminlogin', component: AdminloginComponent},
  {path:'adminmain', component: AdminmainComponent},
  {path:'adminchangepassword', component: AdminchangepasswordComponent},
  {path:'adminaddproduct', component: AdminaddproductComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
