import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-book></app-book>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'book';
}
