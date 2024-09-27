import { Component, ElementRef, ViewChild } from '@angular/core';
import { UserInfoService } from '../user-info/user-info.service';
import { AuthService } from '../auth.service';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-admin-home',
  standalone: true,
  imports: [CommonModule,SidebarComponent,HeaderComponent],
  templateUrl: './admin-home.component.html',
  styleUrl: './admin-home.component.css'
})
export class AdminHomeComponent {
  user: any = {};
  @ViewChild('userName', { static: false }) userName!: ElementRef<HTMLInputElement>;
  loading: boolean = true;
  token: string | null;
  constructor(private authService: AuthService) {
    this.token = authService.getToken();
  }
}
