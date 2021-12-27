import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Shared Module
import { DataFilterPipe } from '../tables/datatable/datafilterpipe';
import { DataTableModule } from 'angular2-datatable';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SharedRoutingModule } from './shared-routing.module';
import { SelectModule } from 'ng-select';
import { EmptyPipe } from '../../pipes/empty.pipe';
import { ChartsModule } from 'ng2-charts';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AddMarqueComponent } from '../marques/components/add-marque/add-marque.component';


@NgModule({
  declarations: [
    DataFilterPipe,
    EmptyPipe,
    AddMarqueComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    DataTableModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    SelectModule,
    ChartsModule,
    ModalModule.forRoot()
  ],
  exports: [
    DataTableModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    DataFilterPipe,
    SelectModule,
    EmptyPipe,
    ChartsModule,
    ModalModule,
    AddMarqueComponent
  ]
})
export class SharedModule { }
