import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { BrowserModule } from '@angular/platform-browser';

import { MaterialModule } from '@port-esdraskhan/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import {uiSharedRoutes} from "./lib.routes";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(uiSharedRoutes),
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [HeaderComponent, RegisterComponent, LoginComponent],
  exports: [HeaderComponent],
})
export class UiSharedModule {}
