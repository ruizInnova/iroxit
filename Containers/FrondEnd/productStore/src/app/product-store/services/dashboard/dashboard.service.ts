import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { StoresData } from '../../interfaces/stores.interface';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private baseUrl: string = environment.baseUrl;


  constructor(private http: HttpClient) { }

  getVentas() {
    const url = `${ this.baseUrl }/dashboard/`;
    return this.http.get<StoresData>(url)
               .pipe(
                  map( resp => {
                    return resp.data[0];
                  })
                );
  }

  getVentasId(id:number) {
    const url = `${ this.baseUrl }/dashboard/prod/${id}`;
    return this.http.get<StoresData>(url)
               .pipe(
                  map( resp => {
                    return resp.data[0];
                  })
                );
  }

  getDetalleVentasId(id:number) {
    const url = `${ this.baseUrl }/dashboard/detalle/${id}`;
    return this.http.get<StoresData>(url)
               .pipe(
                  map( resp => {
                    return resp.data[0];
                  })
                );
  }
  
  getDetalle() {
    const url = `${ this.baseUrl }/dashboard/detalle`;
    return this.http.get<StoresData>(url)
               .pipe(
                  map( resp => {
                    return resp.data[0];
                  })
                );
  }

}
