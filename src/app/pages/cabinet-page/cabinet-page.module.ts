import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CabinetPageRoutingModule} from './cabinet-page-routing.module';
import {CabinetPageComponent} from './cabinet-page.component';
import {CabinetModule} from "../../features/cabinet/cabinet.module";


@NgModule({
  declarations: [
    CabinetPageComponent
  ],
  imports: [
    CommonModule,
    CabinetPageRoutingModule,
    CabinetModule
  ]
})
export class CabinetPageModule {
}
