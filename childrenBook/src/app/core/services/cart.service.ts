import { ComponentFactoryResolver, Injectable } from "@angular/core";
import { CartItem } from './../../models/cart-items';
import { Book } from './../../models/book';
import { find } from "rxjs";
import { ControlContainer } from "@angular/forms";
import { ThisReceiver } from "@angular/compiler";


@Injectable({
  'providedIn': 'root'
})
export class CartService {
  items: CartItem[] = []
  plusToCart(book: Book): any {
    let index = this.items?.findIndex(i => i.book.id === book.id)
    if (!this.items[index]) {
      this.items = [
        ...this.items,
        {
          book,
          creationDate: Date.now(),
          count: 1
        }

      ];
    } else if (this.items[index]) {
      // alert(`Hai già aggiunto il titolo ${book.title}`)
      this.increment(book)
    }

  }

  minusToCart(CartItem: CartItem): any {
    this.items = this.items.filter(item => item.creationDate !== CartItem.creationDate)
    console.log(this.items)
  }
  increment(book: Book): any {
    let index = this.items.findIndex(i => i.book.id === book.id);
    this.items[index].book.price += book.price / this.items[index].count
    this.items[index].count++
  }

  proceed(): any {
    window.alert(this.items.length)
  }
}
