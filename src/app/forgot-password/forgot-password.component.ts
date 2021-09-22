import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  submitted=false;
  forgotForm=new FormGroup({
    email: new FormControl('',Validators.required)
    
     });
  constructor(private route :Router) { }

  ngOnInit(): void {
  }
  forgot() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.forgotForm.invalid) {
     
      return
    };
  
   // this.route.navigate(['#'])
 
  }
}
