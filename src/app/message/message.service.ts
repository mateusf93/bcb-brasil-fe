import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private apiUrl = 'http://localhost:8080/send/message'

  async sendMessage(infoMsg: any, token: string | null): Promise<void> {
    try {
      const response = await fetch(`${this.apiUrl}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(infoMsg),
        credentials: 'include'
      });

      if (!response.ok) {
        throw new Error('Error');
      }

    } catch(e) {
      console.log(e)
      throw new Error('Error')
    }
  }
}
