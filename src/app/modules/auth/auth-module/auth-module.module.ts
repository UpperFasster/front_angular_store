import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthModuleRoutingModule } from './auth-module-routing.module';
import { AuthPageComponent } from '../pages/auth-page/component/auth-page.component';
import { LoginPageComponent } from '../pages/auth-page/route-pages/auth-login/component/login-page.component';
import { RegistrationPageComponent } from '../pages/auth-page/route-pages/auth-registration/component/registration-page.component';
import { CookieService } from 'ngx-cookie-service';
import { MatButtonModule } from '@angular/material/button';
import { AuthService } from '../services/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    AuthPageComponent,
    LoginPageComponent,
    RegistrationPageComponent
  ],
  imports: [
    CommonModule,
    AuthModuleRoutingModule,
    MatButtonModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule
  ],
  providers: [
    CookieService,
    AuthService
  ]
})
export class AuthModuleModule { }
