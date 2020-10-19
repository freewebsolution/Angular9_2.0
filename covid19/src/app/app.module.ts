import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './components/nav/nav.component';
import { SumPipe } from './pipe/sum.pipe';
import {OrderModule} from 'ngx-order-pipe';
import { SortPipe } from './pipe/sort.pipe';
import { AppFilterPipe } from './pipe/app-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    SumPipe,
    SortPipe,
    AppFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    OrderModule
  ],
  providers: [SortPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
