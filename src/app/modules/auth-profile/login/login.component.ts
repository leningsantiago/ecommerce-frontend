import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { FormsModule, NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],

  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  email:any = null;
  password:any = null;

  constructor(
    private authService:AuthService,
    public router:Router
  ) {
  }

  ngOnInit(): void {
    if (this.authService.user && this.authService.token) {
      this.router.navigate(["/"])
    }
  }

  login(){
    if (!this.email || !this.password) {
      alert("LOS CAMPOS EMAIL Y CONTRASEÑA SON OBLIGATORIOS");
      return
    }
    this.authService.login(this.email,this.password).subscribe((resp:any) => {
      console.log(resp)
      if (!resp.error && resp) {
        // SALIO BIEN Y VOLVER AL HOME AUTENTICADO
        document.location.reload();
      }else{
        if (resp.error.message == 'Unauthorized') {
          alert("El CORREO O CONTRASEÑA SON INCORRECTOS");
          return
        }
      }
    })
  }
}
