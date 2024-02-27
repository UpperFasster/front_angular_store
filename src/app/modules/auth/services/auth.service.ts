import { Injectable } from "@angular/core";
import { BaseBackendService } from "../../services/baseService/baseBackend.service";
import { Observable, catchError, map, tap, throwError } from "rxjs";
import { LoginResultDTO } from "./DTO/LoginResultDTO";
import { HttpErrorResponse } from "@angular/common/http";
import { SignInDTO } from "./DTO/SigninDTO";
import { SignUpDTO } from "./DTO/SignUpDTO";


@Injectable()
export class AuthService extends BaseBackendService {

  checkIsUserLoggedIn(): boolean {
    let result: boolean = false;
    if (this.cookieService.check('access_token') && this.cookieService.check('refresh_token')) {
      const cookieVal: any = this.cookieService.get('refresh_token');
      this.httpClient.get<any>(`${this.baseUrl}/validate/${cookieVal}`)
      .subscribe(res => {
        console.log(res);
      });
    }

    return result;
  }

  signin(loginDTO: SignInDTO): Observable<LoginResultDTO> {
    return this.httpClient.post<LoginResultDTO>(`${this.baseUrl}/login/byEmail`, loginDTO);
  }

  signup(signUpDTO: SignInDTO): Observable<LoginResultDTO> {
    return this.httpClient.post<LoginResultDTO>(`${this.baseUrl}/register/byEmail`, signUpDTO);
  }
}
