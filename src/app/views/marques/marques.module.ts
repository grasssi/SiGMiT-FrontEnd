import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MarquesRoutingModule } from './marques-routing.module';
import { MarquesComponent } from './marques.component';
import { ListMarquesComponent } from './components/list-marques/list-marques.component';
import { AddMarqueComponent } from './components/add-marque/add-marque.component';
import { UpdateMarqueComponent } from './components/update-marque/update-marque.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    MarquesComponent,
    ListMarquesComponent,
    // AddMarqueComponent,
    UpdateMarqueComponent
  ],
  imports: [
    CommonModule,
    MarquesRoutingModule,
    SharedModule
  ],
  exports: [
    AddMarqueComponent// <== export the component you want to use in another module
  ] 

})
export class MarquesModule { }
