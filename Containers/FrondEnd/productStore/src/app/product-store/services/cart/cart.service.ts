import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartItemList: any[] = [];
  public productsList = new BehaviorSubject<any>([]);

  private baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getDataProducts() {
    return this.productsList.asObservable();
  }

  setDataProducts(product: any) {
    this.cartItemList.push(...product);
    this.productsList.next(product);
  }

  addtoCart(product: any) {
    this.cartItemList.push(product);
    this.productsList.next(this.cartItemList);
    this.getTotalPrice();
    //console.log(this.cartItemList);
  }

  getTotalPrice(): number {
    let grandTotalPrice = 0;
    this.cartItemList.map((item: any) => {
      //console.log(item.Total);
      grandTotalPrice += item.Total;
    });
    return grandTotalPrice;
  }

  removeCartItem(product: any) {
    //console.log(product.id);
    this.cartItemList.map((a:any, index: any) => {

      if(product.id === a.id) {
        this.cartItemList.splice(index, 1);
      }
    });
    this.productsList.next(this.cartItemList);
  }

  removeAllCartItems() {
    this.cartItemList = [];
    this.productsList.next(this.cartItemList);

  }

  insertStoreDb(body: any) {
      const url = `${ this.baseUrl }/ventas`;
      return this.http.post(url, body);


  }

}
