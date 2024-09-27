import { Component, OnInit } from '@angular/core';
import { UserInfoService } from './user-info.service';
import { AuthService } from '../auth.service';
import { response } from 'express';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-user-info',
  standalone: true,
  imports: [CommonModule, SidebarComponent,HeaderComponent],
  templateUrl: './user-info.component.html',
  styleUrl: './user-info.component.css'
})
export class UserInfoComponent {
  user: any = {};

  loading: boolean = true;
  token: string | null;
  constructor(private userService: UserInfoService, private authService: AuthService) {
    this.token = authService.getToken();
  }
  ngOnInit(): void {
    this.fetchUserInfo();
  }
  async fetchUserInfo(): Promise<void> {

    const response = await this.userService.getUserInfo(this.token)

    if (response) {
      this.user = response;
     if(this.user.balanceType){
      if(this.user.balanceType==='POSTPAID'){
        this.user.balanceType='Pós-Pago'
      }
      if(this.user.balanceType==='PREPAID'){
        this.user.balanceType='Pré-Pago'
      }
     }
      this.loading = false;
    } else {
      this.loading = false;

    }

  }

}



