import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CookieService } from 'ngx-cookie-service';
import { AdminModuleModule } from './modules/admin/admin-module/admin-module.module';
import { StoreModuleModule } from './modules/store/store-module/store-module.module';
import { CommonModule } from '@angular/common';
import { BaseBackendService } from './modules/services/baseService/baseBackend.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ErrorHandlerInterceptor } from './modules/services/backend/error-handler.interceptor';
import { CartService } from './modules/services/cart/Cart.service';
import { IsLoadingBarService } from './interceptor/loadingBar/service/IsLoadingBar.service';
import { LoadingInterceptor } from './interceptor/Loading.interceptor';
import { MatProgressBarModule } from '@angular/material/progress-bar';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    //mat modules
    BrowserAnimationsModule,
    

    //my modules + routing
    AdminModuleModule,
    StoreModuleModule,
    MatProgressBarModule
  ],
  providers: [
    CookieService,
    BaseBackendService,
    CartService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorHandlerInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingInterceptor,
      multi: true
    },
    IsLoadingBarService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
