import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsinfoRoutingModule } from './consinfo-routing.module';
import { ConsinfoComponent } from './consinfo.component';
import { AddConsComponent } from './components/add-cons/add-cons.component';
import { UpdateConsComponent } from './components/update-cons/update-cons.component';
import { ListConsComponent } from './components/list-cons/list-cons.component';


@NgModule({
  declarations: [
    ConsinfoComponent,
    AddConsComponent,
    UpdateConsComponent,
    ListConsComponent
  ],
  imports: [
    CommonModule,
    ConsinfoRoutingModule
  ]
})
export class ConsinfoModule { }
