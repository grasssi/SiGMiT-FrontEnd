import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTypeComponent } from './components/add-type/add-type.component';
import { ListTypesComponent } from './components/list-types/list-types.component';
import { UpdateTypeComponent } from './components/update-type/update-type.component';
import { TypesComponent } from './types.component';

const routes: Routes = [
  { 
    path: '',
   component: TypesComponent 
  },
  { 
    path: 'addtype',
   component: AddTypeComponent 
  },
  { 
    path: 'listtype',
   component: ListTypesComponent 
  },
  { 
    path: 'aupdatetype/:id',
   component: UpdateTypeComponent 
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TypesRoutingModule { }
