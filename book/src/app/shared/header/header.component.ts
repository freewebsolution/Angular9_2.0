import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <!-- Navigation -->
    <nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
      <div class="container">
        <a class="navbar-brand" routerLink="book"><i class="fa fa-book"></i>Book</a>
        <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive"
                aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          Menu
          <i class="fas fa-bars"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a class="nav-link" routerLink="book">Book</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <!-- Page Header -->
    <header class="masthead" style="background-image: url('../../../assets/img/home-bg.jpg')">
      <div class="overlay"></div>
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-md-10 mx-auto">
            <div class="site-heading">
              <h1 class="title">I love Book <i class="fa fa-heart" [style.color]='red'></i></h1>
              <span class="subheading">"La bellezza non è che
una promessa di felicità"<br><small><i>(Stendhal, Dell'amore)</i></small></span>
            </div>
          </div>
        </div>
      </div>
    </header>
  `,
  styles: [`
    .fa.fa-book {
      margin-right: 5px !important;
      color: orange;
    }

    .masthead {
      max-height: 450px;
    }

    .navbar-brand {
      font-size: 2.5rem;
    / / font-weight: 100 !important;
      font-family: 'Amatic SC', cursive;
    }

    .title {
      font-size: 7.2rem !important;
      font-family: 'Amatic SC', cursive;
    }

    #mainNav .navbar-nav > li.nav-item > a {
      font-size: 10px;
      font-weight: 400;
      letter-spacing: 1px;
      text-transform: uppercase;
    }

    header.masthead .overlay {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      max-height: 450px;
      width: 100%;
      background-color: #212529;
      opacity: .5;
    }
  `]
})
export class HeaderComponent implements OnInit {
  red: string;

  constructor() {
  }

  ngOnInit(): void {
    this.red = 'red';
  }

}
