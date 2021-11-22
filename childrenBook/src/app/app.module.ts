import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {SharedModule} from './shared/shared.module';
import { CartModule } from './features/cart/cart.module';
import { LoginModule } from './features/login/login.module';
import { HomeModule } from './features/home/home.module';
import { RegisterModule } from './features/register/register.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    SharedModule,
    CartModule,
    LoginModule,
    HomeModule,
    RegisterModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
