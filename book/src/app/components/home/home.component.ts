import {Component, OnInit} from '@angular/core';
import {BookService} from '../../service/book.service';
import {Book} from '../../model/book';

@Component({
  selector: 'app-home',
  template: `
    <div class="container">
      <div style="margin-bottom:20px">
        <h2 class="cards-title"><i class="fa fa-star"></i>Favourite</h2>
      </div>
      <div class="row">
        <div class="col-md-12">
          <figure class="figure" *ngFor="let book of books">
            <img [src]="book.img" class="figure-img img-fluid">
            <figcaption class="figure-caption">
              <span class="price"> € {{book.price | number:'1.2-2'}}</span>
              <div class="strip">
                <h4>{{book.title}}</h4>
                <h5>Author: {{book.author}}</h5>
                <h6 style="text-align: center"><i class="fa fa-share-square-o fa-2x" aria-hidden="true"
                                                  [routerLink]="['book' , book.id]"></i> <i
                  class="fa fa-heart-o fa-2x"></i></h6>
              </div>
            </figcaption>
          </figure>
        </div>
      </div>
    </div>
  `,
  styles: [`
    figure {
      border: none !important;
      margin-right: 15px;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
      -webkit-transition: all 0.3s cubic-bezier(.25, .8, .25, 1);
      transition: all 0.3s cubic-bezier(.25, .8, .25, 1);
    }

    figure:hover {
      box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    }

    figure img {
      height: 350px;
      width: 250px;
    }

    figcaption {
      padding: 8px;
      border: 1px solid #dadada;
      border-top: none;
      margin-top: -10px !important;
    }

    .figure-caption h4 {
      font-size: 0.8em !important;
      font-weight: bolder;
    }

    .figure-caption h5 {
      font-size: 0.6em !important;
      font-weight: lighter;
    }

    figcaption span.price {
      font-size: 14px;
      font-weight: 800;
      padding: 15px 25px;
      letter-spacing: 1px;
      text-transform: uppercase;
      border-radius: 0;
      font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
      color: #212529;
      background-color: #6dd300;
      border-color: #c69500;
      padding: 5px;
      position: absolute;
      margin-top: -15%;
      margin-left: -1.5% !important;
    }

    i.fa.fa-share-square-o, i.fa.fa-heart-o {
    / / float: right;
      font-size: 1.2em;
      margin-right: 8px;
      text-align: center;
    }
  `]
})
export class HomeComponent implements OnInit {
  books: Book[];

  constructor(private bookService: BookService) {
  }

  getAll() {
    this.bookService.getAll()
      .subscribe(res => {
        this.books = res;
        console.log(this.books);
      });
  }

  ngOnInit(): void {
    this.getAll();
  }

}
