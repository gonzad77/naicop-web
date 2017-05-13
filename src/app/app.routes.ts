import { Routes } from '@angular/router';

import { LoginComponent } from './login/login';

export const rootRouterConfig: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent }
];
