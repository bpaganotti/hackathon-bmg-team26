import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { Routes, RouterModule } from "@angular/router";

import { HomepageComponent } from './pages/homepage/homepage.component';
import { LoginpageComponent } from './pages/loginpage/loginpage.component';
import { SaudefinanceiraComponent } from './pages/saudefinanceira/saudefinanceira.component';

const routes: Routes =[
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home',             component: HomepageComponent },
  { path: 'login',             component: LoginpageComponent },
  { path: 'saude-financeira',  component: SaudefinanceiraComponent },
];

@NgModule({
imports: [
  CommonModule,
  BrowserModule,
  RouterModule.forRoot(routes,{
    useHash: false
  })
],
exports: [
],
})
export class AppRoutingModule { }
