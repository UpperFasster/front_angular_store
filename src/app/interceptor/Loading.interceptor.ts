import { Injectable } from "@angular/core";
import { IsLoadingBarService } from "./loadingBar/service/IsLoadingBar.service";
import { HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import { delay, tap } from "rxjs";

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {
  constructor(private loadingService: IsLoadingBarService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    this.loadingService.setLoadingState(true);

    return next.handle(req)
    .pipe(
      delay(100),
      tap({
        next: (event) => {
          if(event instanceof HttpResponse) {
            this.loadingService.setLoadingState(false);
            return 'Sucsess';
          }
          this.loadingService.setLoadingState(false);
          return '';
        },
        error: (_error) => {
          this.loadingService.setLoadingState(false);
        }
      })
    );
  }
}