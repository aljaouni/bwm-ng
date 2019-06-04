import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent} from './auth.component';
import { AuthService} from './shared/auth.service';
import { AuthGuard } from './shared/auth.guard';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { TokenInterceptor } from './shared/token.interceptor';

const router: Routes = [
  {path: 'login' , component: LoginComponent,canActivate: [AuthGuard]},
  {path: 'register' , component: RegisterComponent,canActivate: [AuthGuard]},
];
@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent,
    AuthComponent,
  ],
  imports: [
    RouterModule.forChild(router),
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
  ],
  providers: [
    AuthService,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass:TokenInterceptor,
      multi: true
    }

  ]
})
export class AuthModule {}
