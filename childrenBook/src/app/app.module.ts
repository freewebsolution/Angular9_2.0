import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './features/home/home.component';
import { CartComponent } from './features/cart/cart.component';
import { LoginComponent } from './features/login/login.component';
import { RegisterComponent } from './features/register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SommaPrezzoPipe } from './shared/pipes/somma-prezzo.pipe';
import { HeaderFormComponent } from './features/home/components/header-form/header-form.component';
import { SearchResultComponent } from './features/home/components/search-list/search-list.component';
import { InfoBookComponent } from './features/home/components/info-book/info-book.component';
import { ModalComponent } from './features/home/components/info-book/modal.component';
import { NoResultsComponent } from './features/home/no-results.component';
import {SharedModule} from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CartComponent,
    LoginComponent,
    RegisterComponent,
    SommaPrezzoPipe,
    HeaderFormComponent,
    SearchResultComponent,
    InfoBookComponent,
    ModalComponent,
    NoResultsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    SharedModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
