import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddConsComponent } from './components/add-cons/add-cons.component';
import { ListConsComponent } from './components/list-cons/list-cons.component';
import { UpdateConsComponent } from './components/update-cons/update-cons.component';
import { ConsinfoComponent } from './consinfo.component';

const routes: Routes = [
  { path: '',
   component: ConsinfoComponent 
  },
  { path: 'addcons',
  component: AddConsComponent 
 },
 { path: 'listcons',
  component: ListConsComponent 
 },
 { path: 'updatecons',
  component: UpdateConsComponent 
 }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ConsinfoRoutingModule { }
