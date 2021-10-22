import { Component, Input, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-grafic',
  templateUrl: './grafic.component.html',
  styleUrls: ['./grafic.component.scss']
})
export class GraficComponent implements OnInit {

  @Input() horizontal: boolean = false;
  @Input() barChartLabels: Label[] = [
    //'2006', '2007', '2008', '2009', '2010', '2011', '2012'
  ];
  @Input() barChartData: ChartDataSets[] = [
   // { data: [65, 59, 80, 81, 56, 55, 40, 5], label: 'Series A' },
  ];

  public barChartOptions: ChartOptions = {
    responsive: true
  };
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;

  

  constructor() { }

  ngOnInit(): void {
    // console.log(this.horizontal);
    if(this.horizontal) {
      this.barChartType = 'horizontalBar';
    }
  }

}
