import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RegistrationPageComponent} from "./components/registration-page/registration-page.component";
import {LoginPageComponent} from "./components/login-page/login-page.component";


const routes: Routes = [
  {
    path: 'register',
    component: RegistrationPageComponent,
    data: {
      title: 'Registration'
    }
  },
  {
    path: 'login',
    component: LoginPageComponent,
    data: {
      title: 'Login'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthPageRoutingModule { }
