import { Component, OnInit } from '@angular/core';
import { Product } from '../../interfaces/products.interface';
import { CartService } from '../../services/cart/cart.service';
import { ProductsService } from '../../services/products/products.service'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  products: Product[] = [];

  constructor(private productsService: ProductsService, private cartService: CartService) { }

  ngOnInit(): void {

    this.productsService.getProducts()
        .subscribe(resp => { 
          //console.log(resp);
          this.products = resp;

          this.products.forEach((a:any, i:any)=> {
            Object.assign(a,{id:i+1,CantidadVendida:10,Total:a.PrecioUnitario*10});
          }); 
    });
  }

  addtoCart(item: any) {
    // console.log(item);
    this.cartService.addtoCart(item);
  }

}
