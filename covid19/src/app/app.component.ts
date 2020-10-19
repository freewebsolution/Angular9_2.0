import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-nav></app-nav>
    <div class="container-fluid">
      <router-outlet></router-outlet>
    </div>
  `,
  styles: []
})
export class AppComponent {
}
