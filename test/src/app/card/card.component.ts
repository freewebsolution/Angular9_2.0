import {Component, Input, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-card',
  template: `
    <div class="card bg-dark text-white mb-1">
      <div class="card-header" (click)="toggle()">
        {{title}}
      </div>
      <div class="card-body" [@collapsable] = 'state'>
        <ng-content></ng-content>
      </div>
    </div>
  `,
  styles: [``],
  animations: [
    trigger('collapsable',[
      state('opened', style({
        height: '*'
      })),
      state('closed', style({
        height: 0,
        padding: 0
      })),
      transition('opened <=> closed', [
        animate('0.7s cubic-bezier(0.85, 0, 0.15, 1)')
      ])
    ])
  ]
})
export class CardComponent implements OnInit {
  @Input() title: string;
  state = 'closed';

  toggle() {
    this.state = this.state === 'opened' ? 'closed' : 'opened';
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}
