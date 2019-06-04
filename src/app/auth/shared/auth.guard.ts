import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

import { AuthService }      from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {}
  private url: string;
  private handelAuthState(): boolean{
    if(this.isloginOrRegister()){
      this.router.navigate(['/rentals']);
      return false;
    }
    return true;
  }
  private handelNotAuthState(): boolean{
    if(this.isloginOrRegister()){
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }
  private isloginOrRegister(): boolean{
    if(this.url.includes('login') || this.url.includes('register'))
      return true;
    return false;
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    this.url=state.url;
    if(this.auth.isAuthenticated()){
      return this.handelAuthState();
    }
    return this.handelNotAuthState();
  }


}
