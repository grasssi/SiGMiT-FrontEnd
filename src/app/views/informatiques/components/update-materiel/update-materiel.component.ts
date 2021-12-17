import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApplicationService } from '../../../../services/application.service';
import { InformatiqueService } from '../../../../services/informatique.service';
import { MarquesService } from '../../../../services/marques.service';
import { OwnerService } from '../../../../services/owner.service';
import { RamService } from '../../../../services/ram.service';
import { ServiceService } from '../../../../services/service.service';
import { SystemeService } from '../../../../services/systeme.service';
import { TypesService } from '../../../../services/types.service';
import { ValidationService } from '../../../../validators/validation.service';

@Component({
  selector: 'app-update-materiel',
  templateUrl: './update-materiel.component.html',
  styleUrls: ['./update-materiel.component.css']
})
export class UpdateMaterielComponent implements OnInit {
  matForm: FormGroup = new FormGroup({});;
  submitted = false;
  id: any
  formErrors: any;
  myRes:any; 
  myTypes: any;
  idTypes: any;
  myMarques: any;
  myApps: any;
  myRam: any;
  mySysteme: any;
  myfindMarques: any;
  myOwners: any;
  constructor(private activatetRoute: ActivatedRoute,
    private router: Router,
    private ownerservice: OwnerService,
    private serviceservice: ServiceService,
    private typeservice: TypesService,
    private systemeservice: SystemeService,
    private applicationservice: ApplicationService,
    private ramservice: RamService,
    private marqueservice: MarquesService,
    private infoservice: InformatiqueService,
    public vf: ValidationService) {
    this.formErrors = this.vf.errorMessages;
  }
  ngOnInit(): void {
    this.allservices();
    this.alltypes();
    this.allmarques();
    this.allowners();
    this.allram();
    this.allsystemes();
    this.allapplication();
    this.matForm = new FormGroup({
      type: new FormControl(),
      Marque: new FormControl(),
      service: new FormControl(),
      SerialNumber: new FormControl(),
      owner: new FormControl(),
      ram: new FormControl(),
      systeme: new FormControl(),
      domaine: new FormControl(),
      application: new FormControl(),
      situation: new FormControl(),
      date: new FormControl(),
      accept: new FormControl(false, Validators.requiredTrue)
    });
    this.id = this.activatetRoute.snapshot.params.id;
    this.infoservice.getMinfo(this.id).subscribe((response: any) => {
      this.matForm.patchValue(response)
    },
      (error) => {
        console.log(error);
      }
    );
    this.allservices()
  }
  get f() { return this.matForm.controls; }


  updateMinfo() {

    this.submitted = true;
    if (this.matForm.invalid) {
      return
    }
    //with services
    this.infoservice.updateMinfo(this.id, this.matForm.value).subscribe((response) => {
      this.router.navigate(['informatiques/listmateriels'])
    },
      (error) => {
        console.log(error);
      }
    );

  }

  onReset() {

    this.submitted = false;
    this.matForm.reset();
  }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.matForm.invalid) {
      return;
    }
  }
  
  //get all services
  allservices() {
    this.serviceservice.allServices().subscribe((response: any) => {
      this.myRes = response
    },
      (error: any) => {
        console.log(error);
      }
    );
  }
  //get all applications
  allapplication() {
    this.applicationservice.allApplication().subscribe((response: any) => {
      this.myApps = response
    },
      (error: any) => {
        console.log(error);
      }
    );
  }
  //get all systeme
  allsystemes() {
    this.systemeservice.allSysteme().subscribe((response: any) => {
      this.mySysteme = response
    },
      (error: any) => {
        console.log(error);
      }
    );
  }
  //get all ram
  allram() {
    this.ramservice.allram().subscribe((response: any) => {
      this.myRam = response
    },
      (error: any) => {
        console.log(error);
      }
    );
  }
  //get all types
  alltypes() {
    this.typeservice.alltypes().subscribe((response: any) => {
      this.myTypes = response
    },
      (error: any) => {
        console.log(error);
      }
    );
  }

  //get all marques
  allmarques() {
    this.marqueservice.allmarques().subscribe((response: any) => {
      this.myMarques = response
    },
      (error: any) => {
        console.log(error);
      }
    );
  }
  //find marques by type
  findmarques() {
    this.marqueservice.findMarques(this.matForm.value.type).subscribe((response: any) => {
      this.myfindMarques = response
      

    },
      (error: any) => {
        console.log(error);
      }
    );
  }

  //get all owners
  allowners() {
    this.ownerservice.allowners().subscribe((response: any) => {
      this.myOwners = response
    },
      (error: any) => {
        console.log(error);
      }
    );
  }

}
