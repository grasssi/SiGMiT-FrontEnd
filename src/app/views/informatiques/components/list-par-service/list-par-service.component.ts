import { Component, OnInit } from '@angular/core';
import { InformatiqueService, TableData } from '../../../../services/informatique.service';

@Component({
  selector: 'app-list-par-service',
  templateUrl: './list-par-service.component.html',
  styleUrls: ['./list-par-service.component.css']
})
export class ListParServiceComponent implements OnInit {
  public barChartLabels: string[]
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData: any[];
  public barChartOptions: any;
  public filterQuery = '';
  chartReady = false
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
    this.appService.listparservice().subscribe(
      res => {
        this.chartReady = true;
        let services = res.map(res => res.service)
        let application = res.map(res => res.application)
        let bureautique = res.map(res => res.bureautique)
        console.log('grosso', res);
        console.log('services', services);
        console.log('application', application);
        console.log('bureautique', bureautique);

        this.barChartOptions = {
          scaleShowVerticalLines: false,
          responsive: true,
        };

        this.barChartLabels = services;
        this.barChartType = 'bar';
        this.barChartLegend = true;

        this.barChartData = [
          { data: application, label: 'منظومات' },
          { data: bureautique, label: 'مكتبية' }
        ];
      });

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
