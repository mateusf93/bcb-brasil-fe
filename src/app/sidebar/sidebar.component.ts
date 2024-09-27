import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  role: string | null;
  constructor(private authService: AuthService, private router: Router) {
    this.role = this.authService.getRole();
    console.log(this.role)
  }

  message(): void {
    this.router.navigate(['/message']);
  }

  home():void{
    this.router.navigate(['/home']);
  }
  userMessage():void{
    this.router.navigate(['/usermessage']);
  }
  logout():void{
    this.authService.logout();
    this.router.navigate(['/login'])
  }


}
