import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UsersPageRoutingModule} from './users-page-routing.module';
import {UserViewPageComponent} from './pages/user-view-page/user-view-page.component';
import {UserListPageComponent} from "./pages/user-list-page/user-list-page.component";
import {UsersModule} from "../../features/users/users.module";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [
    UserListPageComponent,
    UserViewPageComponent
  ],
    imports: [
        CommonModule,
        UsersPageRoutingModule,
        UsersModule,
        MatButtonModule
    ]
})
export class UsersPageModule {
}
