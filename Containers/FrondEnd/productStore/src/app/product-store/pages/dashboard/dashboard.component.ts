import { Component, OnInit } from '@angular/core';
import { ChartDataSets } from 'chart.js';

import { Stores } from '../../interfaces/stores.interface';
import { DashboardService } from '../../services/dashboard/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {


  Indicador: string = 'los productos más vendidos';
  Alertas: boolean = false;
  typesOfShoes: string[] = [];
  types: string[] = [];
  ventas: Stores[] = [];
  ventasxProducto: Stores[] = [];
  detalleVenta: Stores[] = [];
  grandTotalPrice: number = 0;
  productosXTerminar:  Stores[] = [];

  productData: ChartDataSets[] = [
    { data: [], label: 'Productos'}
  ];
  
  

  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.selectReset();
  }

  

  selectIndicador(event: string){
    this.Indicador = event;
    if(event != 'los productos más vendidos') {
      const productSelect = this.ventas.filter( x => x.Titulo == event );
      const idProduct: number | undefined = productSelect[0].IDProductos;
      this.dashboardService.getVentasId(idProduct !)
      .subscribe((data: any) => {
            this.ventasxProducto = data;
            //console.log(data);

            this.typesOfShoes = data.map(function( label: any ){
              //console.log(label.Titulo);
              return label.Fecha;
            });

            const CantidadVendida = data.map(function( d: any ){
              //console.log(d.CantidadVendida);
              return d.CantidadVendida;
            });
            //console.log(CantidadVendida);
            this.productData[0].data = CantidadVendida;

          });
      this.dashboardService.getDetalleVentasId(idProduct !)
          .subscribe((data: any) => {
            //console.log(data);
            this.detalleVenta = data;

            let total: number = 0;
            data.map(function( d: any ){
                total += d.Total_Vendido;
                //console.log(total);
              return total;
            });
            this.grandTotalPrice = total;

          });
    }
  }

  selectReset() {
    this.Indicador = 'los productos más vendidos';
    this.ventasxProducto = [];
    this.cargarDataGraficaGlobal();
  }

  cargarDataGraficaGlobal() {
    this.dashboardService.getVentas()
        .subscribe((data: any) => {
          //console.log(data);

          this.ventas = data;

          this.productosXTerminar = data.filter( (x: any) => {
            return x.Existencias < 100;
          } );
          //console.log(this.productosXTerminar);

          this.types = data.map(function( label: any ){
            //console.log(label.Titulo);
            return label.Titulo;
          });
          
          this.typesOfShoes = data.map(function( label: any ){
            //console.log(label.Titulo);
            return label.Titulo;
          });

          const CantidadVendida = data.map(function( d: any ){
            //console.log(d.CantidadVendida);
            return d.CantidadVendida;
          });
          //console.log(CantidadVendida);
          this.productData[0].data = CantidadVendida;

          let total: number = 0;
          data.map(function( d: any ){
              total += d.Total_Vendido;
              //console.log(total);
            return total;
          });
          this.grandTotalPrice = total;

          
          
        });
        
        this.dashboardService.getDetalle()
        .subscribe((data: any) => {
          this.detalleVenta = data;
        });    
      }
        

}
