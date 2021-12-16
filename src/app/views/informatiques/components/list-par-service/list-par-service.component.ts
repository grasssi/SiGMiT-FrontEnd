import { Component, OnInit } from '@angular/core';
import { InformatiqueService, TableData } from '../../../../services/informatique.service';

@Component({
  selector: 'app-list-par-service',
  templateUrl: './list-par-service.component.html',
  styleUrls: ['./list-par-service.component.css']
})
export class ListParServiceComponent implements OnInit {
  public filterQuery = '';
  error: any;
  public data: TableData;
  constructor(private appService: InformatiqueService) { }

  ngOnInit(): void {
    const res = this.appService.listparservice().subscribe(
      (data: TableData) => {
        setTimeout(() => {
          this.data = [...data];
        }, 1000);
         console.log('res',res);
      }, // success path

      error => this.error = error // error path

    );

  }

  public toInt(num: string) {
    return +num;
  }
  public sortByWordLength = (a: any) => {
    return a.Firstname.length;
  }

  public owners(regDate: string) {
    const date = new Date(regDate);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: '2-digit' });
  }

  onDelete(id: number) {
    //with Services
    this.appService.removeminfo(id).subscribe((response) => {
      this.ngOnInit();
    },
      (error) => {
        console.log(error);
      }
    );
  }
}
