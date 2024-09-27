import { Component } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { HeaderComponent } from '../header/header.component';
import { UserInfoComponent } from '../user-info/user-info.component';
import { AuthService } from '../auth.service';
import { CommonModule } from '@angular/common';
import { AdminHomeComponent } from '../admin-home/admin-home.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  imports:[SidebarComponent, HeaderComponent,UserInfoComponent,CommonModule,AdminHomeComponent],
  standalone:true,
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  role: string | null;
  constructor(private authService: AuthService) {
    this.role = this.authService.getRole();
    console.log(this.role)
  }
}
