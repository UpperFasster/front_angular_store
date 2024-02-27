import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { RegistrationForm } from "../form/RegistrationForm";
import { AuthService } from "src/app/modules/auth/services/auth.service";
import { Observable, catchError, throwError } from "rxjs";
import { HttpErrorResponse } from "@angular/common/http";

@Component({
  selector: "app-registration-page",
  templateUrl: "./registration-page.component.html",
  styleUrls: ["./registration-page.component.scss"]
})
export class RegistrationPageComponent implements OnInit {
  registrationForm: RegistrationForm = new RegistrationForm();
  registration_error: boolean = false;

  constructor(
    private router: Router,
    private as: AuthService
  ) { }

  ngOnInit(): void {
    
  }
  
  register() {
    if(this.registrationForm.isValid()) {
      (this.as.signup(this.registrationForm.getDto()))
      .pipe(
        catchError((error: HttpErrorResponse): Observable<any> => {

          return throwError(() => error);
        })
      )
      .subscribe((res) => {
        this.redirectToLogin();
      })
    }
  }

  redirectToLogin() {
    this.router.navigate(['/auth/signin']);
  }
}
