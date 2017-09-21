import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Non angular modules
import { FlashMessagesModule } from 'angular2-flash-messages';

// App Component
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';

// Services
import { AuthGuard } from './services/auth.guard';
import { AuthenticationService } from './services/authentication.service';
import { UserService } from './services/user.service';
import { ValidateService } from './services/validate.service';

// Components
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    FlashMessagesModule,
  ],

  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    DashboardComponent,
    ProfileComponent
  ],

  providers: [
    AuthGuard,
    AuthenticationService,
    UserService,
    ValidateService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
