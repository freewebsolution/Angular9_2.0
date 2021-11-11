import {Component, OnInit} from '@angular/core';
import {Book} from '../../models/book';
import {HttpClient} from '@angular/common/http';


const url = 'http://localhost:8080/books'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  text= "Ragazzi";
  books: Book[];
  active: Book;
  constructor(private http: HttpClient){}

  searchBooks(text:string): any {
    this.http.get<Book[]>(`${url}?q=${text}`)
      .subscribe(res => {
        this.books = res
        console.log(res)
        this.text = text
        this.active = this.books[0]
      })
  }
  ngOnInit(): any {
    this.searchBooks(this.text)
  }
  setActive(book:Book):any {
    this.active = book;
    console.log(this.active)
  }


}
