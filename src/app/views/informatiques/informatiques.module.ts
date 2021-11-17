import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InformatiquesRoutingModule } from './informatiques-routing.module';
import { InformatiquesComponent } from './informatiques.component';
import { ListeMaterielComponent } from './components/liste-materiel/liste-materiel.component';
import { SharedModule } from '../shared/shared.module';
import { AddMaterielComponent } from './components/add-materiel/add-materiel.component';
import { ListGlobalComponent } from './components/list-global/list-global.component';


@NgModule({
  declarations: [
    InformatiquesComponent,
    ListeMaterielComponent,
    AddMaterielComponent,
    ListGlobalComponent,

  ],
  imports: [
    CommonModule,
    InformatiquesRoutingModule,
    SharedModule,

  ]
})
export class InformatiquesModule { }
