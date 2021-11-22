import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HeaderFormComponent } from './components/header-form/header-form.component';
import { InfoBookComponent } from './components/info-book/info-book.component';
import { ModalComponent } from './components/info-book/modal.component';
import { SearchResultComponent } from './components/search-list/search-list.component';
import { NoResultsComponent } from './no-results.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { HomeRoutingModule } from './home-routing.module';
@NgModule({
  declarations: [
    HomeComponent,
    HeaderFormComponent,
    SearchResultComponent,
    InfoBookComponent,
    ModalComponent,
    NoResultsComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
