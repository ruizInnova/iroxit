import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart/cart.service';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss']
})
export class SalesComponent implements OnInit {

  totalItem: number = 0;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.getDataProducts()
        .subscribe(data =>{
          this.totalItem = data.length;
        })
  }

}
