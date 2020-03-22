import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Book} from '../../model/book';

@Component({
  selector: 'app-book',
  template: `

    <!-- Main Content -->
    <div class="container">
      <div class="row">
        <div class="col-lg-6 col-md-12 mx-0">
          <ul class="list-group">
            <li
              *ngFor="let book of books"
              class="list-group-item"
            >
              {{book.title}} - {{book.author}}
              <div class="pull-right">
                € {{book.price | number:'1.2-2'}}
                <i class="fa fa-trash"></i>
              </div>
            </li>
          </ul>
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
  `]
})
export class BookComponent implements OnInit {
  books: Book[];

  constructor(private http: HttpClient) {
  }

  getAll() {
    this.http.get<Book[]>('http://localhost:3000/books')
      .subscribe((res: Book[]) => {
        this.books = res;
      });
  }

  ngOnInit(): void {
    this.getAll();
  }

}
