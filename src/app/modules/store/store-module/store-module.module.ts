import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModuleRoutingModule } from './store-module-routing.module';
import { MainPageComponent } from '../pages/main-page/component/main-page.component';
import { BackendService } from '../../services/backend/backend.service';
import { AllGoodsPageComponent } from '../pages/main-page/route-pages/all-goods-page/component/all-goods-page.component';
import { ProductPageComponent } from '../pages/main-page/route-pages/product-page/component/product-page.component';
import { TestPageComponent } from '../pages/TestPage/test-page.component';
import { CartItemsComponent } from '../pages/main-page/UI/dialog/component/Cart-Items.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    MainPageComponent,
    AllGoodsPageComponent,
    ProductPageComponent,
    CartItemsComponent,
    TestPageComponent,
  ],
  imports: [
    CommonModule,
    StoreModuleRoutingModule,
    MatIconModule,
    MatButtonModule,
  ],
  providers: [
    BackendService
  ]
})
export class StoreModuleModule { }
