import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdsPageComponent} from "./ads-page.component";


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: AdsPageComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AdsPageRoutingModule {
}
