import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InformatiquesRoutingModule } from './informatiques-routing.module';
import { InformatiquesComponent } from './informatiques.component';
import { ListeMaterielComponent } from './components/liste-materiel/liste-materiel.component';
import { SharedModule } from '../shared/shared.module';
import { AddMaterielComponent } from './components/add-materiel/add-materiel.component';
import { GlobalListComponent } from './components/global-list/global-list.component';
import { ListParServiceComponent } from './components/list-par-service/list-par-service.component';


@NgModule({
  declarations: [
    InformatiquesComponent,
    ListeMaterielComponent,
    AddMaterielComponent,
    GlobalListComponent,
    ListParServiceComponent,

  ],
  imports: [
    CommonModule,
    InformatiquesRoutingModule,
    SharedModule
  ]
})
export class InformatiquesModule { }
