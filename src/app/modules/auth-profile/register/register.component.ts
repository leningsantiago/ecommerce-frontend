import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../_services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {
  name:any = null;
  surname:any = null;
  email:any = null;
  password:any = null;
  repit_password:any = null;

  constructor(
    public authService:AuthService,
    public router:Router
  ) {

  }

  ngOnInit(): void {
    if (this.authService.user && this.authService.token) {
      this.router.navigate(["/"])
    }
  }

  register(){
    if (!this.name || !this.surname || !this.email || !this.password || !this.repit_password) {
      alert("TODOS LOS CAMPOS SON OBLIGATORIOS!!");
      return
    }

    if (this.password != this.repit_password) {
      alert("LAS CONTRASEÑAS NO SON IGUALES!!");
      return
    }

    let data = {
      name: this.name,
      surname: this.surname,
      email: this.email,
      password: this.password,
      type_user: 1
    };

    this.authService.register(data).subscribe((resp:any)=>{
      console.log(resp)
      this.router.navigate(['auth/login'])
    });
  }

}
