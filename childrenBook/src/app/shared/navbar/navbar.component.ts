import { Component } from '@angular/core';
import { NavigationStart, Router, Event as NavigationEvent } from '@angular/router';
import { CartService } from './../../core/services/cart.service';

@Component({
  selector: 'cb-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  event$
  current!: string
  constructor(
    public cart: CartService,
    private router: Router,
    private route: Router
  ) {
    this.event$
      = this.router.events
        .subscribe(
          (event: NavigationEvent) => {
            if (event instanceof NavigationStart) {
              this.current = event.url;
              console.log(this.current);
            }
          });
  }


}
