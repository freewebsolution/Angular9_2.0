import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="container mt-3">
      <app-animated-button
        *ngFor="let section of sections"
        (click)="active = section"
        [selected]="section.id === active.id">
        {{section.label}}
      </app-animated-button>
      <app-animated-text
        [text]="active.text">
      </app-animated-text>
    </div>

  `,
  styles: [`
  `]
})
export class AppComponent {
  sections = [
    {id: 1, label: 'FIRST', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vehicula ut orci in elementum. Cras mi lacus, mollis sit amet faucibus vel, lacinia id diam. '},
    {id: 2, label: 'SECOND', text: 'Morbi venenatis, erat id dapibus varius, nunc sem fringilla felis, quis ullamcorper magna velit a erat. Sed tempus non sapien ac ultricies. Nullam dignissim at libero ut auctor'},
    {id: 3, label: 'THIRD', text: 'Quisque vel tristique orci, sit amet gravida felis. Fusce fringilla turpis vitae arcu porta convallis.'}
  ]
  active = this.sections[0];
}
