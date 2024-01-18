import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/header/header.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-auth-profile',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    RouterOutlet,
  ],
  templateUrl: './auth-profile.component.html',
  styleUrl: './auth-profile.component.css'
})
export default class AuthProfileComponent {

}
