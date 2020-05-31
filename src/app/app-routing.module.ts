import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { Routes, RouterModule } from "@angular/router";

import { HomepageComponent } from './pages/homepage/homepage.component';
import { LoginpageComponent } from './pages/loginpage/loginpage.component';
import { SaudefinanceiraComponent } from './pages/saudefinanceira/saudefinanceira.component';
import { AuthGuardService as AuthGuard  } from './services/auth-guard.service';

const routes: Routes =[
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'login', component: LoginpageComponent },
  { path: 'home', component: HomepageComponent , canActivate: [AuthGuard] },
  { path: 'saude-financeira',  component: SaudefinanceiraComponent, canActivate: [AuthGuard] },
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
