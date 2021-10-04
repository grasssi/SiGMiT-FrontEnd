import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../../../services/user.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css'],
  providers: [UserService]

})
export class UpdateUserComponent implements OnInit {
  submitted = false;
  id: any
  profileForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    repassword: new FormControl('', Validators.required),
    role: new FormControl(''),
  });
  constructor(private activatetRoute: ActivatedRoute, private router: Router, private usersService: UserService) { }

  ngOnInit(): void {
    this.id = this.activatetRoute.snapshot.params.id;
      this.usersService.getuser(this.id).subscribe((response:any) => {
        this.profileForm.patchValue(response)
        console.log(response);
    },
    (error) => {
      console.log(error);
    }
    );
  }

  updateuser() {
    this.submitted = true;
    if (this.profileForm.invalid) { return };
    //with services
    console.log(this.profileForm.value);
    this.usersService.updateuser(this.id, this.profileForm.value).subscribe((response) =>{
      this.router.navigate(['users/listusers'])
    },
      (error) => {
        console.log(error);
      }
    );
  }
}
