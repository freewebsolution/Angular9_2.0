import { ComponentFactoryResolver, Injectable } from "@angular/core";
import { CartItem } from './../../models/cart-items';
import { Book } from './../../models/book';
import { AuthService } from "./auth.service";


@Injectable({
  'providedIn': 'root'
})
export class CartService {
  constructor(
    private auth: AuthService
  ) { }
  items: CartItem[] = []
  data: any = []
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
  decrement(book: Book): any {
    let index = this.items.findIndex(i => i.book.id === book.id);
    this.items[index].book.price -= book.price / this.items[index].count
    this.items[index].count--
    if (this.items[index].count === 0) {
      this.minusToCart(this.items[index])
    }
  }
  increment(book: Book): any {
    let index = this.items.findIndex(i => i.book.id === book.id);
    this.items[index].book.price += book.price / this.items[index].count
    this.items[index].count++
  }

  proceed(): any {
    let length = this.items.length;
    console.log(`
    Total item: ${length},
    Order: ${this.auth.data.name},
    Email: ${this.auth.data.email},
    `
    )
    // for (let i = 0; i <= length; i++) {
    //   this.data = [
    //     ...this.data,
    //     [i +1, this.items[i]?.book.title , this.items[i]?.book.price]
    //   ]
    //   console.log(this.data)
    // }
  }
}
