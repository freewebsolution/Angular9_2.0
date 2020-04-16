import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-animated-button',
  animations: [
    trigger('buttonAnimated', [
      state('over', style({
        transform: 'scale(1.2) rotate(15deg)'
      })),
      state('out', style({
        transform: 'scale(1)'
      })),
      state('selected', style({
        backgroundColor: 'orange'
      })),
      transition('out <=> over', [
        animate('0.3s')
      ]),
    ])
  ],
  template: `
    <button
      class="button"
      [disabled]="selected"
      [@buttonAnimated]="state"
      (mouseover)="state = 'over'"
      (mouseout)="state = 'out'"
    >
      <ng-content></ng-content>
    </button>
  `,
  styleUrls: ['./animated-button.component.css']
})
export class AnimatedButtonComponent implements OnChanges {
  @Input() selected = false;
  state = 'out';

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes.selected);
    if(changes.selected) {
      this.state = changes.selected.currentValue ? 'selected' : 'out';
    }

  }

}
