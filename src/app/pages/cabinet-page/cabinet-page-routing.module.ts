import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CabinetPageComponent} from "./cabinet-page.component";


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: CabinetPageComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class CabinetPageRoutingModule {
}
