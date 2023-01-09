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
import { uiSharedRoutes } from './lib.routes';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UtilsModule } from '@port-esdraskhan/utils';
import { Step1DataUserComponent } from './register/register-steps/step1-data-user/step1-data-user.component';
import { Step2DataAdressComponent } from './register/register-steps/step2-data-adress/step2-data-adress.component';
import { Step3DataContactComponent } from './register/register-steps/step3-data-contact/step3-data-contact.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(uiSharedRoutes),
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    FormsModule,
    UtilsModule,
  ],
  declarations: [
    HeaderComponent,
    RegisterComponent,
    LoginComponent,
    Step1DataUserComponent,
    Step2DataAdressComponent,
    Step3DataContactComponent,
  ],
  exports: [HeaderComponent],
})
export class UiSharedModule {}
