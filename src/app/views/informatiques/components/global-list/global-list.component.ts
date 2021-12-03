import { Component, OnInit } from '@angular/core';
import { InformatiqueService, TableData } from '../../../../services/informatique.service';

@Component({
  selector: 'app-global-list',
  templateUrl: './global-list.component.html',
  styleUrls: ['./global-list.component.css']
})
export class GlobalListComponent implements OnInit {

  public filterQuery = '';
  error: any;
  public data: TableData;
  constructor(private appService: InformatiqueService) {}

  ngOnInit(): void {
    const res=this.appService.globalList().subscribe(
        (data: TableData) => {
          setTimeout(() => {
            this.data = [...data];
            console.log(this.data);
          }, 1000);
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
