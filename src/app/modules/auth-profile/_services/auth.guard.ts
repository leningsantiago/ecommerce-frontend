import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class authGuard implements CanActivate  {

  constructor(
    public authService: AuthService,
    public router: Router
  ) {

  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if (!this.authService.user && !this.authService.token) {
      this.router.navigate(["auth/login"]);
      return false
    }
    let token = this.authService.token;
    let expiracion = (JSON.parse(atob(token.split('.')[1]))).exp;

    if (Math.floor((new Date).getTime() / 1000) >= expiracion) {
      this.authService.logout();
      return false;
    }

    return false
  }



};
