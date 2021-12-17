import { Component, OnInit } from '@angular/core';
import { InformatiqueService, TableData } from '../../../../services/informatique.service';

@Component({
  selector: 'app-global-list',
  templateUrl: './global-list.component.html',
  styleUrls: ['./global-list.component.css']
})
export class GlobalListComponent implements OnInit {

  public barChartLabels: string[]
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData: any[];
  public barChartOptions: any;
  public filterQuery = '';
  chartReady = false
  error: any;
  public data: TableData;
  chart = [];
  constructor(private appService: InformatiqueService) { }

  ngOnInit(): void {
    const res = this.appService.globalList().subscribe(
      (data: TableData) => {
        setTimeout(() => {
          this.data = [...data];
        }, 1000);
        console.log('res', res);
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
  // public barChartOptions: any = {
  //   scaleShowVerticalLines: false,
  //   responsive: true
  // };

  // public barChartLabels: string[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  // public barChartType = 'bar';
  // public barChartLegend = true;

  // public barChartData: any[] = [
  //   { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
  //   { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
  // ];

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }
}

