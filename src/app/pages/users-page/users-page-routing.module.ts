import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserListPageComponent} from "./pages/user-list-page/user-list-page.component";
import {UserViewPageComponent} from "./pages/user-view-page/user-view-page.component";
import {UsersPageGuard} from "../../features/users/guards/users-page.guard";


const routes: Routes = [
  {
    path: '',
    canActivate: [UsersPageGuard],
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: UserListPageComponent
      },
      {
        path: ':id',
        component: UserViewPageComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersPageRoutingModule {
}
