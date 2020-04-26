import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomePageRoutingModule} from './home-page-routing.module';
import {HomePageComponent} from './pages/home-page/home-page.component';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatIconModule} from "@angular/material/icon";


@NgModule({
  declarations: [
    HomePageComponent
  ],
    imports: [
        CommonModule,
        HomePageRoutingModule,
        MatProgressSpinnerModule,
        MatIconModule
    ]
})
export class HomePageModule {
}
