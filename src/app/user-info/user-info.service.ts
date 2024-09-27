import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class UserInfoService {
  private apiUrl = 'http://localhost:8080/user/profile';


  async getUserInfo(token: string | null): Promise<any> {
    try {
      const response = await fetch(`${this.apiUrl}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        credentials: 'include'
      });

      if (!response.ok) {
        throw new Error('Error');
      }

      const data = await response.json();

      return data;
    } catch {
      throw new Error('Error')
    }
  }

}
