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

  consominfoForm = new FormGroup({
    nomCons: new FormControl(),
    nomimp: new FormControl(),
    accept: new FormControl(false, Validators.requiredTrue)
  });

  constructor(private toasterService: ToasterService,
    private router: Router,
    private consinfo: ConsinfoService,
    public vf: ValidationFormsService) {
    this.formErrors = this.vf.errorMessages;
  }
  ngOnInit(): void { }
  get f() { return this.consominfoForm.controls; }

  addconsinfo() {
    this.submitted = true;
    if (this.consominfoForm.invalid) {
      return
    };
    //with Services
    const addcons = this.consinfo.addcons(this.consominfoForm.value).subscribe((response: any) => {
      this.toasterService.pop('success', 'Success Login', response.message);
      // this.affectService(this.ownerForm.value)
      this.router.navigate(['/consinfo']);
    },
      (error: any) => {
        this.toasterService.pop('error', 'Error', error.error.message);
        console.log(error);
      }
    );
  }


  onReset() {

    this.submitted = false;
    this.consominfoForm.reset();

  }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.consominfoForm.invalid) {
      return;
    }

  }
}

