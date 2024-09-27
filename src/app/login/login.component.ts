import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { response } from 'express';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  standalone: true,
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) { }
  @ViewChild('email', { static: false }) email!: ElementRef<HTMLInputElement>;
  @ViewChild('password', { static: false }) password!: ElementRef<HTMLInputElement>;
  async login(): Promise<void> {
    const emailValue = this.email.nativeElement.value;
    const passwordValue = this.password.nativeElement.value;
    try {
      const response = await this.authService.login(emailValue, passwordValue)
      if (response && response.token) {
        this.authService.saveToken(response.token);
        this.authService.saveRole(response.role);
        this.router.navigate(['/home']);
      } else {
        this.errorMessage = 'Credenciais inválidas. Tente novamente.';
        alert('Credenciais inválidas. Tente novamente.');
      }
    } catch {

      alert("Usuário ou senha inválido")

        this.email.nativeElement.value='';
       this.password.nativeElement.value='';
    }
  }
}
