import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToasterService } from 'angular2-toaster';
import { MarquesService } from '../../../../services/marques.service';
import { ValidationFormsService } from '../../../forms/validation-forms/validation-forms.service';

@Component({
  selector: 'app-add-marque',
  templateUrl: './add-marque.component.html',
  styleUrls: ['./add-marque.component.css']
})
export class AddMarqueComponent implements OnInit {
  submitted = false;
  formErrors: any;
  myRes: any;
  myName: any;
  myMarques:any

  marqueForm = new FormGroup({
    type: new FormControl(),
    marque: new FormControl(),
    //accept: new FormControl(false, Validators.requiredTrue)
  });

  constructor(private toasterService: ToasterService,
    private router: Router,
    private marqueservice:MarquesService,
    public vf: ValidationFormsService) {
    this.formErrors = this.vf.errorMessages;
  }
  ngOnInit(): void { 
this.allmarques();
  }
  get f() { return this.marqueForm.controls; }

  addmarque() {
    this.submitted = true;
    if (this.marqueForm.invalid) {
      return
    };
    //with Services
    const addmarque = this.marqueservice.addMarque(this.marqueForm.value).subscribe((response: any) => {
      this.toasterService.pop('success', 'Success Login', response.message);
      // this.affectService(this.ownerForm.value)
      // this.router.navigate(['/marques']);
      this.router.navigate(['/types/addtype']);
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
    this.marqueForm.reset();

  }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.marqueForm.invalid) {
      return;
    }

  }
}
