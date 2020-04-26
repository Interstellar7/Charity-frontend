import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AuthPageRoutingModule} from './auth-page-routing.module';
import {RegistrationPageComponent} from './components/registration-page/registration-page.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {FormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatCheckboxModule} from "@angular/material/checkbox";
import { LoginPageComponent } from './components/login-page/login-page.component';
import {CoreModule} from "../../core/core.module";


@NgModule({
  declarations: [RegistrationPageComponent, LoginPageComponent],
    imports: [
        CommonModule,
        AuthPageRoutingModule,
        FormsModule,
        MatButtonModule,
        MatCheckboxModule,
        MatFormFieldModule,
        MatInputModule,
        CoreModule
    ]
})
export class AuthPageModule {
}
