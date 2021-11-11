import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './features/home/home.component';
import {CartComponent} from './features/cart/cart.component';
import {LoginComponent} from './features/login/login.component';
import {RegisterComponent} from './features/register/register.component';

const routes: Routes = [
  {path: 'home', component:HomeComponent,},
  {path: 'login', component:LoginComponent},
  {path: 'cart', component:CartComponent},
  {path: 'register', component:RegisterComponent},
  {path: '**', redirectTo:'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
