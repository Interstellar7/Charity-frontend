import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Page404Component} from './components/page404/page404.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: Page404Component,
    data: {
      title: 'Not found'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ErrorPageRoutingModule { }
