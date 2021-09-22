import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  submitted=false;
  registerForm=new FormGroup({
    firstName: new FormControl('',Validators.required),
    lastName: new FormControl('',Validators.required),
    base: new FormControl('',Validators.required),
    fonction: new FormControl('',Validators.required),
    userName: new FormControl('',Validators.required),
    email: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required),
    rPassword: new FormControl('',Validators.required)
     });
    
  constructor(private route :Router) { }

  ngOnInit(): void {
  }
  register(){
    this.submitted = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return
    };
  
    this.route.navigate(['/login'])
  }
}
