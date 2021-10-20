import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { ProductData } from '../../interfaces/products.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private baseUrl: string = environment.baseUrl;


  constructor(private http: HttpClient) {}
  
  getProducts() {
    const url = `${ this.baseUrl }/productos/`;

    return this.http.get<ProductData>(url)
                .pipe(
                  map( resp => {
                    return resp.data
                  })
                );
  }

}
