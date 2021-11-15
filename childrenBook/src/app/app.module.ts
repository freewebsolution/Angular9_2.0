import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './features/home/home.component';
import { CartComponent } from './features/cart/cart.component';
import { LoginComponent } from './features/login/login.component';
import { RegisterComponent } from './features/register/register.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { IntToArrayPipe } from './shared/pipes/int-to-array.pipe';
import { SommaPrezzoPipe } from './shared/pipes/somma-prezzo.pipe';
import { HeaderFormComponent } from './features/home/components/header-form/header-form.component';
import { SearchResultComponent } from './features/home/components/search-result/search-result.component';
import { InfoBookComponent } from './features/home/components/info-book/info-book.component';
import { ModalComponent } from './features/home/components/info-book/modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CartComponent,
    LoginComponent,
    RegisterComponent,
    FooterComponent,
    NavbarComponent,
    IntToArrayPipe,
    SommaPrezzoPipe,
    HeaderFormComponent,
    SearchResultComponent,
    InfoBookComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
