import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './features/home/home.component';
import {CartComponent} from './features/cart/cart.component';
import {LoginComponent} from './features/login/login.component';
import {RegisterComponent} from './features/register/register.component';
import { AuthGuard } from './core/services/auth.guard';
import {NoResultsComponent} from './features/home/no-results.component';

const routes: Routes = [
  {path: 'home', component:HomeComponent, canActivate: [AuthGuard]},
  {path: 'login', component:LoginComponent},
  { path: 'cart', component: CartComponent, canActivate: [AuthGuard]},
  {path: 'register', component:RegisterComponent},
  {path: 'no-results', component:NoResultsComponent,canActivate: [AuthGuard]},
  { path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
