import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "src/app/modules/auth/services/auth.service";
import { BackendService } from "src/app/modules/services/backend/backend.service";
import { LoginForm } from "../form/LoginForm";
import { SignInDTO } from "src/app/modules/auth/services/DTO/SigninDTO";
import { Observable, catchError, throwError } from "rxjs";
import { HttpErrorResponse } from "@angular/common/http";
import { LoginResultDTO } from "src/app/modules/auth/services/DTO/LoginResultDTO";

@Component({
  selector: "app-login-page",
  templateUrl: "./login-page.component.html",
  styleUrls: ["./login-page.component.scss"]
})

export class LoginPageComponent {
  loginForm: LoginForm = new LoginForm();
  validForm: boolean = false;
  hide: boolean = true;

  constructor(
    private router: Router,
    private as: AuthService,
  ) {}

  login(): void {
    if(this.loginForm.isValid()) {
      (this.as.signin(this.loginForm.getDto()))
      .pipe(
        catchError((error: HttpErrorResponse): Observable<any> => {

          return throwError(() => error);
        })
      )
      .subscribe((res: LoginResultDTO) => {
        
        console.log(res.access);
      })
    }
  }

  redirectToSignUp(): void {
    this.router.navigate(['/auth/signup']); // Replace 'signup' with your signup route
  }
}
