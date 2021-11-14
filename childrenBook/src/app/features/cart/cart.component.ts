import { Component, OnInit } from '@angular/core';
import { CartService } from './../../core/services/cart.service';
import { CartItem } from './../../models/cart-items';

@Component({
  selector: 'cb-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(
    public cart: CartService
  ) { }

  ngOnInit(): void {
  }
  public locationsSum(): any {
    return this.cart.items.map(tag => tag.book.price).reduce((a, b) => a + b, 0);
  }

}
