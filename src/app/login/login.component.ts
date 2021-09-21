import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  submitted=false;
  loginForm=new FormGroup({
    userName: new FormControl('',Validators.required),
    password: new FormControl('',[Validators.required])
     });
     get f() { return this.loginForm.controls; }
  constructor(private route :Router) { }

  ngOnInit(): void {
  }
  login() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
     
      return
    };
  
    this.route.navigate(['#'])
 
  }
  onReset() {
    this.submitted = false;
    this.loginForm.reset();
  }
}
