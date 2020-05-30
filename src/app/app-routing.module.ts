import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { Routes, RouterModule } from "@angular/router";

import { HomepageComponent } from './pages/homepage/homepage.component';

const routes: Routes =[
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home',             component: HomepageComponent },
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
