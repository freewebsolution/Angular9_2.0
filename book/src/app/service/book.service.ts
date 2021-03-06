import { Injectable } from '@angular/core';
import {Book} from '../model/book';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {NgForm} from '@angular/forms';
const ApiUrl = 'http://localhost/bookServer/';
@Injectable({
  providedIn: 'root'
})
export class BookService {

  // METODO GET RICEZIONE DATI
  getAll(): Observable <Book[]> {
    return this.http.get<Book[]>(ApiUrl);
  }

  // METODO POST AGGIUNTA DATI
  addBook(form: NgForm): Observable<Book> {
    return this.http.post<Book>(`${ApiUrl}`, form.value);
  }

  // METODO PATCH MODIFICA DATI
  editBook(form: NgForm, active: Book): Observable<Book> {
    return this.http.patch<Book>(`${ApiUrl}?id=${active.id}`, form.value);
  }

  // METODO DELETE CANCELLAZIONE DATI
    deleteBook(book: Book): Observable<Book> {
      return this.http.delete<Book>(`${ApiUrl}?id=${book.id}`);
  }

  // METODO DETAIL-BOOK PASSAGGIO PARAMTRI

  detailBook(id): Observable<Book> {
    return this.http.get<Book>(`${ApiUrl}?id=${id}`);
  }
  constructor(private http: HttpClient) { }
}
