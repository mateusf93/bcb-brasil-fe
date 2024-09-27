import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { HeaderComponent } from '../header/header.component';
import { UserMessageService } from './user-messages.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-user-messages',
  standalone: true,
  imports: [CommonModule,SidebarComponent,HeaderComponent],
  templateUrl: './user-messages.component.html',
  styleUrl: './user-messages.component.css'
})
export class UserMessagesComponent {
  userMessage: any = [];
  token: string | null;
  constructor(private userService: UserMessageService, private authService: AuthService) {
    this.token = authService.getToken();
  }

  ngOnInit(): void {
    this.fetchUserMessage();
  }

  async fetchUserMessage():Promise<void>{
    const response = await this.userService.getUserMessa(this.token);
    if (response) {
      this.userMessage = response;
    }
  }
}
