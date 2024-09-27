import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Importar FormsModule para usar ngModel
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component'; // Importar o LoginComponent
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './auth.service';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { HeaderComponent } from './header/header.component';
import { MessageComponent } from './message/message.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    SidebarComponent,
    UserInfoComponent,
    HeaderComponent,
    MessageComponent,
    UserInfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
