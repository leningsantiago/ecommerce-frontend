import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { URL_SERVICES } from '../../../config/config';
import { map, catchError, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: any;
  token: any = "";

  constructor(
    public http: HttpClient,
    public router: Router
  ) {
    this.loadStorage();
  }

  loadStorage() {
    if (typeof window === 'undefined') {
      // No estamos en un navegador, salir de la función
      return;
    }
    const token = localStorage.getItem("token");

    if (token) {
      this.token = localStorage.getItem("token");
      this.user =  JSON.parse(localStorage.getItem("user") ?? '');
      console.log(this.token);
      console.log(this.user);
    } else {
      this.token = null;
      this.user = null;
    }
  }

  login(email: string, password: string) {
    let URL = URL_SERVICES + '/users/login_ecommerce';
    return this.http.post(URL, { email, password }).pipe(
      map((resp: any) => {
        if (resp.access_token) {
          return this.saveLocalStorageResponse(resp);
        } else {
          return resp;
        }
      }),
      catchError((err: any) => {
        return of(err);
      })
    );
  }

  saveLocalStorageResponse(resp: any) {
    if (resp.access_token && resp.user) {
      localStorage.setItem("token", resp.access_token);
      localStorage.setItem("user", JSON.stringify(resp.user));
      this.user = resp.user;
      this.token = resp.access_token;
      return true;
    }
    return false;
  }

  register(data:any) {
    let URL = URL_SERVICES + '/users/register';
    return this.http.post(URL, data);
  }

  logout() {
    this.user = null;
    this.token = null;
    localStorage.removeItem('token');
    localStorage.removeItem('user');

    this.router.navigate(['auth/login']);
  }
}
