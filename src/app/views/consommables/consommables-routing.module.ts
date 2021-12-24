import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsommablesComponent } from './consommables.component';

const routes: Routes = [{ path: '', component: ConsommablesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsommablesRoutingModule { }
