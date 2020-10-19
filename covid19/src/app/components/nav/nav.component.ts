import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-nav',
  template: `
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <a class="navbar-brand" href="#"><span style="color:green">Covid-</span>19 <small style="font-size: 0.5em;color:red">Situazione
        italia</small></a>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a class="nav-link" href="#"><i class="fa fa-calendar" aria-hidden="true" style="margin-right: 8px"></i><span style=" color: rgb(255, 170, 0);">{{date |date: 'dd-MM-yyyy'}}</span></a>
          </li>
        </ul>
      </div>
    </nav>
  `,
  styles: [
      `
      nav.navbar {
        margin-bottom: 20px;
      }
    `
  ]
})
export class NavComponent implements OnInit {

  constructor() {
  }

  date: Date = new Date();

  ngOnInit(): void {
  }

}
