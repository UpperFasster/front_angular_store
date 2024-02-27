import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { CookieService } from "ngx-cookie-service";
import { ViewBackendService } from "../backend/view-backend.service";

/**
 * @description
 * @class
 */
@Injectable()
export class BaseBackendService {
  protected baseUrl: String = "http://192.168.68.109:8080";
  constructor(
    protected httpClient: HttpClient,
    protected router: Router,
    protected cookieService: CookieService,
    public viewBackend: ViewBackendService
  ) { }

}
