import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from '@angular/common/http';
import { Auth } from "src/app/models/auth";
import { Router } from "@angular/router";

@Injectable({
  'providedIn': 'root'
})
export class AuthService {
  data: Auth
  error: string
  constructor(
    private http: HttpClient,
    private router: Router

  ) { }
  login({ user, pass }) {
    this.error = null;
    const params = new HttpParams()
      .set('user', user)
      .set('pass', pass)
    this.http.get<Auth>(`http://localhost:8080/login`, { params })
      .subscribe(
        res => {
          this.data = res
          this.router.navigateByUrl('home')
        },
        err => this.error = err
        );
  }
  logout() {
    this.data = null
    this.router.navigateByUrl('login')
  }
  isLogged(): any {
    const isAuth = this.data && this.data.token ? true : false
    // const isAuth = !!this.data.token
    return isAuth;
  }

}
