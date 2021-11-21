import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApplicationsRoutingModule } from './applications-routing.module';
import { ApplicationsComponent } from './applications.component';
import { AddApplicationComponent } from './components/add-application/add-application.component';
import { ListApplicationComponent } from './components/list-application/list-application.component';
import { UpdateApplicationComponent } from './components/update-application/update-application.component';
import { SharedModule } from '../shared/shared.module';
import { GlobalListComponent } from './components/global-list/global-list.component';


@NgModule({
  declarations: [
    ApplicationsComponent,
    AddApplicationComponent,
    ListApplicationComponent,
    UpdateApplicationComponent,
    GlobalListComponent
  ],
  imports: [
    CommonModule,
    ApplicationsRoutingModule,
    SharedModule
  ]
})
export class ApplicationsModule { }
