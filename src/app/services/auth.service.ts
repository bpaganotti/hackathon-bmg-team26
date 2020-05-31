import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  public isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    // Check whether the token is expired and return
    // true or false
    console.log('token', token)
    return token != null;
    //return !this.jwtHelper.isTokenExpired(token);
  }

  login(){
    localStorage.setItem('token','123456');
    this.router.navigate(['/home', {  }]);
  }

  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/login', {  }]);
  }
}
