import { Component } from '@angular/core';
import { NavigationStart, Router, Event as NavigationEvent } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { CartService } from './../../core/services/cart.service';

@Component({
  selector: 'cb-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  event$:any
  current!: string
  constructor(
    public cart: CartService,
    public auth:AuthService,
    private router: Router,
  ) {
    this.event$
      = this.router.events
        .subscribe(
          (event: NavigationEvent) => {
            if (event instanceof NavigationStart) {
              this.current = event.url;
            }
          });
  }


}
