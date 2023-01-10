import { Route } from '@angular/router';
import {HeaderComponent} from "./header/header.component";

import {RegisterComponent} from "./register/register.component";
import {LoginComponent} from "./login/login.component";

export const uiSharedRoutes: Route[] = [
  { path: '', pathMatch: 'full', redirectTo:"/kanban" },
  {
    path:"kanban",
    loadChildren:()=>import('./kanban/kanban.module').then(m=>m.KanbanModule),
  },
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
