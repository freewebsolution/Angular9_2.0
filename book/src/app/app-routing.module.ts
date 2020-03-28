import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BookDetailComponent} from './features/book-detail/book-detail.component';
import {BookComponent} from './components/book/book.component';


const routes: Routes = [
  {path: 'book', component: BookComponent},
  {path: 'book/:id', component: BookDetailComponent},
  {path: '', component: BookComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
