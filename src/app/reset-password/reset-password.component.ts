import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  submitted=false;
  resetForm=new FormGroup({
    currentPwd: new FormControl('',Validators.required),
    newPwd: new FormControl('',Validators.required),
    confirmPwd: new FormControl('',Validators.required)
   
     });
  constructor(private route :Router) { }

  ngOnInit(): void {
  }
  reset(){
    this.submitted = true;
    // stop here if form is invalid
    if (this.resetForm.invalid) {
        return
    };
  
    this.route.navigate(['/login'])
  }
}
