import { Injectable } from '@angular/core';

import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8080/auth'; // URL da API
  private tokenKey = 'authToken';

  constructor(private router: Router) { }

  async login(email: string, password: string): Promise<any> {

    try{const response = await fetch(`${this.apiUrl}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({ email, password }),
      credentials: 'include'

    });

    if (!response.ok) {
      throw new Error('Login failed');
    }

    const data = await response.json();
    return data;
  }catch{
    throw new Error('Login failed')
  }
  }

  saveToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
  }
  saveRole(role:string):void{
    localStorage.setItem("userRole", role);
  }
  getRole():string | null{
    return localStorage.getItem('userRole');
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  isLoggedIn(): boolean {
    return this.getToken() !== null;
  }

  logout(): void {
    localStorage.removeItem(this.tokenKey);
    this.router.navigate(['/login']);
  }
}
