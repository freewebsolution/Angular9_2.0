import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'cb-header-form',
  template: `
<header class="masthead" style="background-image: url('assets/img/home-bg.jpg')">
    <div class="container position-relative px-4 px-lg-5">
        <div class="row gx-4 gx-lg-5 justify-content-center">
            <div class="col-md-10 col-lg-8 col-xl-7">
                <div class="site-heading">
                    <h1 class="headerTitle">Children Books</h1>
                    <span class="subheading">
            <form #f="ngForm" (submit)="search.emit(f.value.text)">
              <div class="form">
                <i class="fas fa-search fs-4"></i><input type="text" class="form-control form-input"
                  placeholder="Search Book..." [ngModel]="text" name="text"> <span class="left-pan"><button
                    class="btn btn-secondary" type="submit">Search</button></span>
                </div>
                </form>
                </span>
            </div>
        </div>
    </div>
    </div>
</header>
  `,
  styles: [
  ]
})
export class HeaderFormComponent {
  @Input() text: string
  @Output() search: EventEmitter<string> = new EventEmitter<string>();

}
