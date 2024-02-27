import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPanelComponent } from '../pages/admin/component/admin-panel.component';
import { TestPageComponent } from '../pages/TestPage/test-page.component';

const routes: Routes = [
  {
    path: 'products', 
    component: AdminPanelComponent,
  },
  {
    path: 'test', 
    component: TestPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminModuleRoutingModule { }
