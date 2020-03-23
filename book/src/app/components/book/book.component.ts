import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Book} from '../../model/book';
import {BookService} from '../../service/book.service';

const ApiUrl = 'http://localhost:3000/books';

@Component({
  selector: 'app-book',
  template: `

    <!-- Main Content -->
    <div class="container">
      <div *ngIf="error" class="alert alert-danger">Error</div>
      <div class="row">
        <div class="col-lg-6 col-md-12 mx-0">
          <ul class="list-group">
            <li
              *ngFor="let book of books"
              class="list-group-item"
              [ngClass]="{'active': book.id === active?.id}"
              (click)="setActive(book)"
            >
              <img [src]="book.img ? book.img : '../../assets/img/copertineLibri/add.png'" class="img-thumbnail mr-2" alt="" width="40">
              {{book.title}} - {{book.author}}
              <div class="pull-right">
                <span [style.color]="book.price > 15 ? 'red' : null">€ {{book.price | number:'1.2-2'}}</span>
                <i class="fa fa-trash ml-2" (click)="delete($event,book)"></i>
              </div>
            </li>
          </ul>
        </div>
        <div class="col-lg-6 col-md12 mx-0">
          <app-form
            [active]="active"
            [books]="books"
          >
          </app-form>
        </div>
      </div>
    </div>

    <hr>

  `,
  styles: [`
    .list-group-item {
      font-size: 0.75em;
    }

    .list-group-item.active {
      z-index: 2;
      color: #fff;
      background-color: darkorange;
      border-color: darkorange;
    }

    .btn-sm {
      padding: .25rem .5rem;
      font-size: .875rem;
      line-height: 1.5;
      border-radius: .2rem;
    }
  `]
})
export class BookComponent implements OnInit {
  books: Book[];
  error: any;
  active: Book;

  constructor(private http: HttpClient, private bookService: BookService) {
  }

  getAll() {
    this.bookService.getAll()
      .subscribe((res: Book[]) => {
          this.books = res;
        },
        err => this.error = err);
  }

  delete(event, book: Book) {
    event.stopPropagation();
    // const index = this.books.indexOf(book);
    this.http.delete<Book>(`${ApiUrl}/${book.id}`)
      .subscribe(() => {
          const index = this.books.findIndex(b => b.id === book.id);
          this.books.splice(index, 1);
        },
        err => this.error = err
      );
  }

  setActive(book: Book) {
    this.active = book;
  }


  ngOnInit(): void {
    this.getAll();
  }

}
