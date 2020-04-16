import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AnimatedButtonComponent } from './components/animated-button/animated-button.component';
import { AnimatedTextComponent } from './components/animated-text.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    AnimatedButtonComponent,
    AnimatedTextComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
