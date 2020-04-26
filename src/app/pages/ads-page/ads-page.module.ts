import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdsPageRoutingModule} from './ads-page-routing.module';
import {AdsPageComponent} from './ads-page.component';
import {AdsModule} from "../../features/ads/ads.module";


@NgModule({
  declarations: [
    AdsPageComponent
  ],
  imports: [
    CommonModule,
    AdsPageRoutingModule,
    AdsModule
  ]
})
export class AdsPageModule {
}
