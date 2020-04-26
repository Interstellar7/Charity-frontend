import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";
import {CategoriesTreeComponent} from "./components/categories-tree/categories-tree.component";
import {AdsListComponent} from "./components/ads-list/ads-list.component";
import {MatTreeModule} from "@angular/material/tree";
import {MatIconModule} from "@angular/material/icon";
import {MatProgressBarModule} from "@angular/material/progress-bar";


@NgModule({
  declarations: [
    CategoriesTreeComponent,
    AdsListComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatTreeModule,
    MatIconModule,
    MatProgressBarModule
  ],
  exports: [
    CategoriesTreeComponent,
    AdsListComponent
  ]
})
export class AdsModule {
}
