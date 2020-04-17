import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpErrorResponse, HttpParams} from '@angular/common/http';
import {NgForm} from '@angular/forms';
import {catchError, map} from 'rxjs/operators';
import {throwError, Observable} from 'rxjs';

const ApiUrl = 'http://localhost/bookServer/auth/'
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private option: HttpHeaders = new HttpHeaders().set('Content-type', 'application/x-www-form-urlencoded');

  constructor(private http: HttpClient) {
  }

  login(datiform): Observable<string> {
    const body = this.body(datiform);
    return this.http.post(ApiUrl, body, {headers: this.option})
      .pipe(
        map(res => {
          if (res['token']) {
            this.setSession(res['token']);
          }
          return res['token'];
        }),
        catchError(this.errorhandler)
      );

  }

  private setSession(jwt: string) {
    let expired: number = new Date().getTime() + 60000 * 60;
    localStorage.setItem('token', jwt);
    localStorage.setItem('expire', expired.toString());
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('expire');
  }


  private body(df: NgForm) {
    let param = new HttpParams()
      .set('username', df.value.username)
      .set('password', df.value.password);
    return param;
  }

  notExpired(): boolean {
    if (localStorage.getItem('expire')) {
      let expire: number = parseInt(localStorage.getItem('expire'));
      return new Date().getTime() < expire;
    }
    return false;
  }


  /*GESTIONE ERRORI*/
  errorhandler(error: any) {
    console.log(error);
    let msg: string;
    if (error instanceof HttpErrorResponse) {
      if (error.status === 0) {
        msg = 'Applicazione offline';
      } else {
        msg = `Si è verificato un errore: ${error.error.msg} (server status code ${error.status})`;
      }
      return throwError(msg);
    }
    return throwError(`Si è verificato un errore di tipo: ${error.message}`);
  }
}
