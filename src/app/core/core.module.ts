import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from "@angular/common/http";
import {LOAD_CURRENT_USER_INITIALIZER} from "./services/current-user.service";
import {RouterModule} from "@angular/router";
import {UserMenuComponent} from "./components/user-menu/user-menu.component";
import {MatButtonModule} from "@angular/material/button";
import {HasRoleDirective} from "./directives/has-role.directive";
import { ValidationErrorsDirective } from './directives/validation-errors.directive';


@NgModule({
  declarations: [
    UserMenuComponent,
    HasRoleDirective,
    ValidationErrorsDirective
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatButtonModule,
    RouterModule
  ],
  providers: [
    LOAD_CURRENT_USER_INITIALIZER,
  ],
  exports: [
    UserMenuComponent,
    HasRoleDirective,
    ValidationErrorsDirective
  ]
})
export class CoreModule {
}
