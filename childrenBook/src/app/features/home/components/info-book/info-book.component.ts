import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CartService } from 'src/app/core/services/cart.service';
import { Book } from './../../../../models/book';
import { CartItem } from './../../../../models/cart-items';

@Component({
  selector: 'cb-info-book',
  template: `
            <div class="post-preview">
                <h2 class="post-title">{{active?.title}}
                    <i class="fas fa-info-circle blue" data-bs-toggle="modal" data-bs-target="#exampleModal"></i>
                </h2>
                <!-- Modal -->
                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <cb-modal [active]="active"></cb-modal>
                </div>
                <p class="post-meta">
                    Author: {{active?.author}} <br> Isbn: {{active?.isbn}}<br> Pagine: {{active?.pagine}}<br> Categorie: {{active?.categoria}}
                    <br> Anno di uscita: {{active?.anno}}
                    <br> Feedback:
                    <i *ngFor="let star of 5 | intToArray;let i = index" class="icon" [ngClass]="{
            'ion-ios-star gold': i < active?.stars,
            'ion-ios-star-outline':  i >= active?.stars
            }"></i>
                    <br>
                    <b>Price:
            <i *ngFor="let item of cart.items;index as i">
              <em *ngIf="cart.items[i].book.isbn === active?.isbn && item.count > 1 "> (x{{item.count}}) </em>
            </i>
            {{active?.price}} €</b>
                </p>
                <button class="btn btn-success" (click)="addTocart.emit(active)">Add to cart</button>
            </div>
  `,
  styles: [`
  .gold {
    color: #ffd700 !important;
}
  `
  ]
})
export class InfoBookComponent {
  constructor(public cart: CartService) { }
  @Input() active: Book
  @Input() items: CartItem[]
  @Output() addTocart: EventEmitter<Book> = new EventEmitter<Book>()

}
