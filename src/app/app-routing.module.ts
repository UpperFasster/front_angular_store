import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import(`../app/modules/store/store-module/store-module.module`).then(m => m.StoreModuleModule)
  },
  {
    path: 'admin', 
    loadChildren: () => import(`../app/modules/admin/admin-module/admin-module.module`).then(m => m.AdminModuleModule)
  },
  {
    path: 'auth',
    loadChildren: () => import(`../app/modules/auth/auth-module/auth-module.module`).then(m => m.AuthModuleModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
