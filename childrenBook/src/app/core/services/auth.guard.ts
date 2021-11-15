import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { AuthService } from "./auth.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private auth: AuthService,
    private router: Router
  ) { }
  canActivate(): any {
    // const isAuth = this.auth.isLogged()
    // // if(!isAuth){
    // //   this.router.navigateByUrl('login')
    // // }
    // return isAuth;
    return true
  }
}
