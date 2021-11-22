import { NgModule } from '@angular/core';
import { IntToArrayPipe } from './pipes/int-to-array.pipe';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SommaPrezzoPipe } from './pipes/somma-prezzo.pipe';
const items = [
  IntToArrayPipe,
  SommaPrezzoPipe,
  FooterComponent,
  NavbarComponent,
]
@NgModule({
  declarations: [
    ...items
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    ...items
  ]
})
export class SharedModule { }
