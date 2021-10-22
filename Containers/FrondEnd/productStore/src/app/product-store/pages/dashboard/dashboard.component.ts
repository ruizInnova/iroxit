import { Component, OnInit } from '@angular/core';
import { ChartDataSets } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  Indicador: string = 'los productos más vendidos';
  Alertas: boolean = false;
  typesOfShoes: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers', 'Global'];
  productData: ChartDataSets[] = [
    { data: [121,212, 112, 98, 456, 789], label: 'Productos'}
  ];
  
  

  constructor() { }

  ngOnInit(): void {
  }

  selectIndicador(event: string){
    this.Indicador = event;
  }

  selectReset() {
    return this.Indicador = 'los productos más vendidos';
  }

  

}
