import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsinfoComponent } from './consinfo.component';

const routes: Routes = [{ path: '', component: ConsinfoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsinfoRoutingModule { }
