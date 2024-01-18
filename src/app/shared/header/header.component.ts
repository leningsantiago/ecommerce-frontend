import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../modules/auth-profile/_services/auth.service';
import { CommonModule } from '@angular/common';

declare var $: any; // Declara la variable $ para que TypeScript la reconozca

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterLink,
    CommonModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  user:any = null;

  constructor(
    public authService: AuthService
  ) {

  }

  ngOnInit(): void {
    this.user = this.authService.user;
    $('.nice_select').niceSelect();

  }

  logout(){
    this.authService.logout();
  }
}
