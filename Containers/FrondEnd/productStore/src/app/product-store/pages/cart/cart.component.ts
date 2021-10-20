import {Component, OnInit} from '@angular/core';

import { CartService } from '../../services/cart/cart.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  public products: any = [];
  public grandTotal: number = 0;
  public compra: boolean = false;


  constructor(private cartService: CartService) { }

  

  ngOnInit(): void { 
    this.compra = false;
    this.getProducts();
  }

  getProducts() {
    this.cartService.getDataProducts()
    .subscribe(resp => {
      this.products = resp;
      // console.log(this.products);
      this.grandTotal = this.cartService.getTotalPrice();
    });
  }


  deleteElement(id: any){
    this.cartService.removeCartItem(id);
  }

  deleteAllElementCart() {
    this.cartService.removeAllCartItems();
  }

  insertStore() {
    const newData = this.products.map(function (product: any) {
        const obj = {
          IDProductos: product.IDProductos,
          CantidadVendida: product.CantidadVendida
        };

        return obj;
      } 
    );
    // console.log(newData);
    this.cartService.insertStoreDb(newData)
        .subscribe(resp => {
          console.log(resp);
        });
    this.deleteAllElementCart();
    this.compra = true;
  }

}