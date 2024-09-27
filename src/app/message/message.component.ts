import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { AuthService } from '../auth.service';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { HeaderComponent } from '../header/header.component';
import { MessageService } from './message.service';

@Component({
  selector: 'app-message',
  standalone: true,
  imports: [CommonModule, SidebarComponent,HeaderComponent],
  templateUrl: './message.component.html',
  styleUrl: './message.component.css'
})
export class MessageComponent {

  @ViewChild('telefoneDest', { static: false }) telefoneDest!: ElementRef<HTMLInputElement>;
  @ViewChild('textMessage', { static: false }) textMessage!: ElementRef<HTMLInputElement>;
  @ViewChild('sendType', { static: false }) sendType!: ElementRef<HTMLInputElement>;
  role: string | null;
  token: string | null;
  constructor(private authService: AuthService, private messageService: MessageService) {
    this.role = this.authService.getRole();
    this.token = this.authService.getToken();
    console.log(this.role)
  }

  async sendMessage():Promise<void>{
     let infoMessage = {
      telefoneDest:this.telefoneDest.nativeElement.value,
      textMessage: this.textMessage.nativeElement.value,
      sendType: this.sendType.nativeElement.checked ? 'WPP' : 'TXT'
     }
     await this.messageService.sendMessage(infoMessage, this.token);
     this.resetForm();
     alert("Mensagem enviada com sucesso!");
  }

  resetForm(): void {
    this.telefoneDest.nativeElement.value = '';
    this.textMessage.nativeElement.value = '';
    this.sendType.nativeElement.checked = false;
  }

}
