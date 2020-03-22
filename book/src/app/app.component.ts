import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-header></app-header>
    <app-book></app-book>
    <app-footer></app-footer>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'book';
}
