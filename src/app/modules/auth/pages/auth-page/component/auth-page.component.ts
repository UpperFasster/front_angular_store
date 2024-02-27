import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { CookieService } from "ngx-cookie-service";
import { AuthService } from "../../../services/auth.service";

@Component({
  selector: "app-auth-page",
  templateUrl: "./auth-page.component.html",
  styleUrls: ["./auth-page.component.scss"]
})

export class AuthPageComponent implements OnInit {

  constructor(
    private router: Router,
    private authS: AuthService
  ) { }


  ngOnInit(): void {
    if (!this.authS.checkIsUserLoggedIn()) {
      this.router.navigate(['/auth/signin']);
    }
  }
}
