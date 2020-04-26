import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatTableModule} from "@angular/material/table";
import {RouterModule} from "@angular/router";
import {UsersTableComponent} from "./components/users-table/users-table.component";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatSortModule} from "@angular/material/sort";
import { RoleColorPipe } from './pipes/roleColor.pipe';
import {MatButtonModule} from "@angular/material/button";
import {MatChipsModule} from "@angular/material/chips";
import { UserCreateDialogComponent } from './components/user-create-dialog/user-create-dialog.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { UserEditDialogComponent } from './components/user-edit-dialog/user-edit-dialog.component';
import { UserRoleDialogComponent } from './components/user-role-dialog/user-role-dialog.component';
import {MatSelectModule} from "@angular/material/select";
import {CoreModule} from "../../core/core.module";


@NgModule({
  declarations: [
    UsersTableComponent,
    RoleColorPipe,
    UserCreateDialogComponent,
    UserEditDialogComponent,
    UserRoleDialogComponent
  ],
  imports: [
    CommonModule,
    RouterModule,

    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatButtonModule,
    MatChipsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    CoreModule
  ],
  exports: [
    UsersTableComponent
  ]
})
export class UsersModule {
}
