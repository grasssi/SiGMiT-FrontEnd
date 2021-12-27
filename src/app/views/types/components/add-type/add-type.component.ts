import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToasterService } from 'angular2-toaster';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { MarquesService } from '../../../../services/marques.service';
import { TypesService } from '../../../../services/types.service';
import { ValidationFormsService } from '../../../forms/validation-forms/validation-forms.service';

@Component({
  selector: 'app-add-type',
  templateUrl: './add-type.component.html',
  styleUrls: ['./add-type.component.css']
})
export class AddTypeComponent implements OnInit {
  @ViewChild('infoModal') public infoModal: ModalDirective;
  submitted = false;
  formErrors: any;
  myRes: any;
  myName: any;
  myMarques:any

  typeForm = new FormGroup({
    type: new FormControl(),
    marque: new FormControl(),
    accept: new FormControl(false, Validators.requiredTrue)
  });

  constructor(private toasterService: ToasterService,
    private router: Router,
    private typeservice: TypesService,
    private marqueservice:MarquesService,
    public vf: ValidationFormsService) {
    this.formErrors = this.vf.errorMessages;
  }
  ngOnInit(): void { 
this.allmarques();
  }
  get f() { return this.typeForm.controls; }

  addtype() {
    this.submitted = true;
    if (this.typeForm.invalid) {
      return
    };
    //with Services
    const addtype = this.typeservice.addtype(this.typeForm.value).subscribe((response: any) => {
      this.toasterService.pop('success', 'Success Login', response.message);
      // this.affectService(this.ownerForm.value)
      this.router.navigate(['/types']);
    },
      (error: any) => {
        this.toasterService.pop('error', 'Error', error.error.message);
        console.log(error);
      }
    );
  }
  allmarques() {
    this.marqueservice.allmarques().subscribe((response: any) => {
      this.myMarques = response
    },
      (error: any) => {
        console.log(error);
      }
    );
  }

  onReset() {

    this.submitted = false;
    this.typeForm.reset();

  }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.typeForm.invalid) {
      return;
    }

  }
}

