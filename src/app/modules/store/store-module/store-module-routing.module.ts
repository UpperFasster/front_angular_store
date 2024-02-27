import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from '../pages/main-page/component/main-page.component';
import { TestPageComponent } from '../pages/TestPage/test-page.component';
import { ProductPageComponent } from '../pages/main-page/route-pages/product-page/component/product-page.component';
import { AllGoodsPageComponent } from '../pages/main-page/route-pages/all-goods-page/component/all-goods-page.component';
import { CartItemsComponent } from '../pages/main-page/UI/dialog/component/Cart-Items.component';

const routes: Routes = [
  {
    path: '', component: MainPageComponent,
    children: [
      { 
        path: '', component: AllGoodsPageComponent 
      },
      {
        path: 'p/:id', component: ProductPageComponent
      },
      {
        path: 'cart', component: CartItemsComponent
      }
    ]
  },
  {
    path: 'test', component: TestPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StoreModuleRoutingModule { }
