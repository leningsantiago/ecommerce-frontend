import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/auth-profile/login/login.component';
import { RegisterComponent } from './modules/auth-profile/register/register.component';


export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import("./modules/home/home.component")
  },
  {
    path: 'auth',
    loadComponent: () => import("./modules/auth-profile/auth-profile.component"),
    children: [
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'register',
        component: RegisterComponent
      }
    ]
  },
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'error/404',
  },
];

