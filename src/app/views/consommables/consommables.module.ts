import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsommablesRoutingModule } from './consommables-routing.module';
import { ConsommablesComponent } from './consommables.component';


@NgModule({
  declarations: [
    ConsommablesComponent
  ],
  imports: [
    CommonModule,
    ConsommablesRoutingModule
  ]
})
export class ConsommablesModule { }
