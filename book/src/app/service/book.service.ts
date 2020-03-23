import { Injectable } from '@angular/core';
import {Book} from '../model/book';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
const ApiUrl = 'http://localhost:3000/books';
@Injectable({
  providedIn: 'root'
})
export class BookService {

  getAll(): Observable <Book[]> {
    return this.http.get<Book[]>(ApiUrl);
  }
  constructor(private http: HttpClient) { }
}
