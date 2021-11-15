import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from './../../../../models/book';

@Component({
  selector: 'cb-search-result',
  template: `

            <div *ngIf="this.books">
                <small><b>Result for {{text}}: {{this.books?.length}} items</b></small>
                <hr class="my-1" />
            </div>
            <!-- Search preview-->
            <div *ngFor="let book of books" class="post-preview searchResult" (click)="setActive.emit(book)" [ngClass]="{'active':book.id === this.active?.id}">
                <img [src]="book.images" class="img-fluid" alt="">
                <h4 class="post-title">{{book.title}}</h4>
                <p class="post-meta">Autore: <em><i>{{book.author}}</i></em>
                    <br> Isbn: {{book.isbn}}
                </p>
                <hr class="my-4" />
            </div>

  `,
  styles: [`
          .active {
          background-color: #919294;
          margin-left: 8px;
          transition: ease 0.3s;
        }
        .active >p {
          color:white;
        }
          `
  ]
})
export class SearchResultComponent {
  @Input() books: Book[];
  @Input() active: Book;
  @Input() text: string
  @Output() setActive: EventEmitter<Book> = new EventEmitter<Book>();

}
