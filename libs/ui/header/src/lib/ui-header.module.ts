import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { uiHeaderRoutes } from './lib.routes';
import { HeaderComponent } from './header/header.component';
import {BrowserModule} from "@angular/platform-browser";

import {MaterialModule} from "@port-esdraskhan/material";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FlexLayoutModule} from "@angular/flex-layout";

@NgModule({
  imports: [CommonModule, RouterModule.forChild(uiHeaderRoutes),BrowserModule,MaterialModule,BrowserAnimationsModule,FlexLayoutModule
   ],
  declarations: [HeaderComponent],
  exports: [HeaderComponent],
})
export class UiHeaderModule {}
