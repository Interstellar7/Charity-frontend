import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";
import {ParticipantsListComponent} from "./components/participants-list/participants-list.component";
import {MyApplicationsListComponent} from "./components/my-applications-list/my-applications-list.component";
import {MyAdsListComponent} from "./components/my-ads-list/my-ads-list.component";
import {MatTreeModule} from "@angular/material/tree";
import {MatIconModule} from "@angular/material/icon";
import {MatProgressBarModule} from "@angular/material/progress-bar";


@NgModule({
  declarations: [
    ParticipantsListComponent,
    MyApplicationsListComponent,
    MyAdsListComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatTreeModule,
    MatIconModule,
    MatProgressBarModule
  ],
  exports: [
    ParticipantsListComponent,
    MyApplicationsListComponent,
    MyAdsListComponent
  ]
})
export class CabinetModule {
}
