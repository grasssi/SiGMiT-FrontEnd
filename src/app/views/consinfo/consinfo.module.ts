import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsinfoRoutingModule } from './consinfo-routing.module';
import { ConsinfoComponent } from './consinfo.component';
import { AddConsComponent } from './components/add-cons/add-cons.component';
import { UpdateConsComponent } from './components/update-cons/update-cons.component';
import { ListConsComponent } from './components/list-cons/list-cons.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ConsinfoComponent,
    AddConsComponent,
    UpdateConsComponent,
    ListConsComponent
  ],
  imports: [
    CommonModule,
    ConsinfoRoutingModule,
    SharedModule
  ]
})
export class ConsinfoModule { }
