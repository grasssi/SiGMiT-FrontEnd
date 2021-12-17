import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMaterielComponent } from './components/add-materiel/add-materiel.component';
import { GlobalListComponent } from './components/global-list/global-list.component';
import { ListParServiceComponent } from './components/list-par-service/list-par-service.component';
import { ListeMaterielComponent } from './components/liste-materiel/liste-materiel.component';
import { UpdateMaterielComponent } from './components/update-materiel/update-materiel.component';
import { InformatiquesComponent } from './informatiques.component';

const routes: Routes = [
  {
    path: '',
    component: InformatiquesComponent
  },
  {
    path: 'listmateriels',
    component: ListeMaterielComponent
  },
  {
    path: 'addmateriel',
    component: AddMaterielComponent
  },
  {
    path: 'listglobal',
    component: GlobalListComponent
  },
  {
    path: 'listparservice',
    component: ListParServiceComponent
  },
  {
    path: 'updatemateriel/:id',
    component: UpdateMaterielComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InformatiquesRoutingModule { }
