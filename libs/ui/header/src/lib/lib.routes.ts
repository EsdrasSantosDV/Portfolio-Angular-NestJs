import { Route } from '@angular/router';
import {HeaderComponent} from "./header/header.component";

import {RegisterComponent} from "./register/register.component";
import {LoginComponent} from "./login/login.component";

export const uiHeaderRoutes: Route[] = [
  { path: '', pathMatch: 'full', component: HeaderComponent },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '**',
    redirectTo: '/',
  },
];
