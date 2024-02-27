import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthPageComponent } from '../pages/auth-page/component/auth-page.component';
import { LoginPageComponent } from '../pages/auth-page/route-pages/auth-login/component/login-page.component';
import { RegistrationPageComponent } from '../pages/auth-page/route-pages/auth-registration/component/registration-page.component';

const routes: Routes = [
  {
    path: '', component: AuthPageComponent,
    children: [
      {
        path: 'signin', component: LoginPageComponent
      },
      {
        path: 'signup', component: RegistrationPageComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthModuleRoutingModule { }
