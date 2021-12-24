import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToasterService } from 'angular2-toaster';
import { ConsinfoService } from '../../../../services/consinfo.service';
import { ValidationFormsService } from '../../../forms/validation-forms/validation-forms.service';

@Component({
  selector: 'app-add-cons',
  templateUrl: './add-cons.component.html',
  styleUrls: ['./add-cons.component.css']
})
export class AddConsComponent implements OnInit {
  submitted = false;
  formErrors: any;
  myRes: any;
  myName: any; 

  consominforeqForm = new FormGroup({
    refreq: new FormControl(),
    datereq: new FormControl(),
    nom: new FormControl(),
    qtreq: new FormControl(),
    forwho: new FormControl(),
    functions: new FormControl(),
    refdti: new FormControl(),
    datedti: new FormControl(),
    qtdti: new FormControl(),
    refemaa: new FormControl(),
    dateemaa: new FormControl(),
    qtemaa: new FormControl(),
    refdgti: new FormControl(),
    datedgti: new FormControl(),
    qtdgti: new FormControl(),
    accept: new FormControl(false, Validators.requiredTrue)
  });

  constructor(private toasterService: ToasterService,
    private router: Router,
    private consinfo: ConsinfoService,

    public vf: ValidationFormsService) {
    this.formErrors = this.vf.errorMessages;

  }
  ngOnInit(): void {}
 }
