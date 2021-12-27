import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TypesRoutingModule } from './types-routing.module';
import { TypesComponent } from './types.component';
import { UpdateTypeComponent } from './components/update-type/update-type.component';
import { AddTypeComponent } from './components/add-type/add-type.component';
import { ListTypesComponent } from './components/list-types/list-types.component';
import { SharedModule } from '../shared/shared.module';
// import { AddMarqueComponent } from '../marques/components/add-marque/add-marque.component';


@NgModule({
  declarations: [
    TypesComponent,
    UpdateTypeComponent,
    AddTypeComponent,
    ListTypesComponent,
    // AddMarqueComponent

  ],
  imports: [
    CommonModule,
    TypesRoutingModule,
    SharedModule,
  ],
  // exports: [
  //   AddMarqueComponent
  // ]
})
export class TypesModule { }
