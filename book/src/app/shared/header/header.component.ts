import {Component, HostListener, Inject, OnInit} from '@angular/core';
import {AuthService} from '../../service/auth.service';
import {trigger, state, transition, style, animate} from '@angular/animations';
import {DOCUMENT} from '@angular/common';

@Component({
  selector: 'app-header',
  template: `
    <nav class="animated fadeInDown navbar navbar-expand-lg navbar-light fixed-top" id="mainNav" [@fade]="state">
      <div class="container">
        <a class="navbar-brand" routerLink=""><i class="fa fa-book"></i>Book</a>
        <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
                data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false"
                aria-label="Toggle navigation" (click)="isCollapsed = !isCollapsed">
          Menu
          <i class="fa fa-bars"></i>
        </button>
        <div [ngbCollapse]="!isCollapsed" class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item" *ngFor="let link of linkMenu">
              <a class="nav-link" [routerLink]="this.auth.checkDir() + link.url">{{link.text}}</a>
            </li>
            <li *ngIf="!this.auth.notExpired(); else logout" class="nav-item">
              <a class="nav-link" routerLink="login">Login <i class="fa fa-lock"></i></a>
            </li>
            <ng-template #logout>
              <li class="nav-item">
                <a class="nav-link" routerLink="logout">Logout <i class="fa fa-unlock"></i></a>
              </li>
            </ng-template>
          </ul>
        </div>
      </div>
    </nav>
    <!-- Page Header -->
    <header class="masthead bgImg">
      <div class="overlay"></div>
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-md-10 mx-auto">
            <div class="site-heading">
              <h1 class="title">I love Book <i [style.color]="red" class="fa fa-heart" aria-hidden="true"></i></h1>
              <span class="subheading">"La bellezza non è che
una promessa di felicità"<br><small><i>(Stendhal, Dell'amore)</i></small></span>
            </div>
          </div>
        </div>
      </div>
    </header>
    <div class="subHeader">

    </div>

    <!-- Navigation -->
  `,
  styles: [
      `
      .subHeader {
        width: 100%;
        height: 60px;
        border: 1px solid #dadada;
        margin-top: 0 !important;
        margin-bottom: 20px;
        background: #f3f3f3f3;
        padding-top: 0px;
        box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
      }

      .subHeader ul li {
        display: table-cell;
        vertical-align: middle;
      }

      .subHeader ul li a {
        font-family: 'Montserrat', sans-serif;
        color: #424242;
        text-transform: uppercase;
        font-weight: bold;
      }

      .subHeader > ul > li > a {
        background-color: #f3f3f3;
        border-right: 1px solid #d3d3d3;
        padding-left: 180px;
        right: 30px;
        padding-top: 0;
        height: 50px !important;
        display: table-cell;
        width: 25% !important;
        vertical-align: middle;

      }

      .sticky {
        background: #fff !important;
        box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.7);
        position: fixed !important;
        color: #444 !important;
        top: 0 !important;
        height: auto;
        max-height: 50px;
        float: left;
        width: 100%;
        color: #333 !important;
      }

      .sticky a.navbar-brand {
        color: #222 !important;
        font-weight: bold !important;
      }

      .sticky li a {
        color: #222 !important;
        font-weight: bold !important;
      }

      .bgImg {
        background-image: url(../../../assets/img/home-bg.jpg);
        max-height: 300px;
      }

      .fa.fa-book {
        margin-right: 5px !important;
        color: orange;
      }

      .fa.fa-lock {
        margin-left: 5px;
        margin-top: -3px;
        font-size: 1rem;
        color: #212529;
      }

      .fa.fa-unlock {
        margin-left: 5px;
        margin-top: -3px;
        font-size: 1rem;
        color: green;
      }

      .navbar-brand {
        font-size: 2.5rem;
      / / font-weight: 100 !important;
        font-family: 'Amatic SC', cursive;
      }

      .title {
        margin-top: -80px !important;
        font-size: 6rem !important;
        font-family: 'Amatic SC', cursive;
      }

      #mainNav .navbar-nav > li.nav-item > a {
        font-size: 10px;
        font-weight: 400;
        letter-spacing: 1px;
        text-transform: uppercase;
      }

      header.masthead {
        margin-bottom: 0 !important;
      }

      header.masthead .overlay {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        max-height: 300px;
        width: 100%;
        background-color: #212529;
        opacity: .5;
      }
    `
  ],
  animations: [
    trigger('fade',
      [
        state('void', style({opacity: 0.9})),
        transition(':enter', [animate(300)]),
        transition(':leave', [animate(500)]),
      ]
    )]
})
export class HeaderComponent implements OnInit {
  red: string;
  isCollapsed: any;
  linkMenu: any;
  state = 'void';

  constructor(public auth: AuthService, @Inject(DOCUMENT) document) {
    this.linkMenu = [
      {text: 'Book', url: ''}
    ];
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e) {
    if (window.pageYOffset > 40) {
      let element = document.getElementById('mainNav');
      element.classList.add('sticky');
    } else {
      let element = document.getElementById('mainNav');
      element.classList.remove('sticky');
    }
  }


  ngOnInit(): void {
    this.red = 'red';

  }

}
