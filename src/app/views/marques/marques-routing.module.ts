import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMarqueComponent } from './components/add-marque/add-marque.component';
import { ListMarquesComponent } from './components/list-marques/list-marques.component';
import { UpdateMarqueComponent } from './components/update-marque/update-marque.component';
import { MarquesComponent } from './marques.component';

const routes: Routes =
  [
    {
      path: '',
      component: MarquesComponent
    },
    {
      path: 'addmarque',
      component: AddMarqueComponent
    },

    {
      path: 'listmarques',
      component: ListMarquesComponent
    },

    {
      path: 'updatemarque/:id',
      component: UpdateMarqueComponent
    },
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MarquesRoutingModule { }
