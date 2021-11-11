import {Component} from '@angular/core';
import { NavigationStart, Router,Event as NavigationEvent } from '@angular/router';

@Component({
  selector: 'cb-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  event$
  current!:string
  constructor(private router: Router, private route:Router ) {
    this.event$
      =this.router.events
      .subscribe(
        (event: NavigationEvent) => {
          if(event instanceof NavigationStart) {
            this.current = event.url;
            console.log(this.current);
          }
        });
  }


}
