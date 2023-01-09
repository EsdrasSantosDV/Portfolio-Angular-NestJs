import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {UiSharedModule} from "../../../../libs/ui/shared/src";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, UiSharedModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
