import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SujetComponent } from './sujet/sujet.component';


@NgModule({
  declarations: [
    AppComponent,
    SujetComponent
  ],
  imports: [
    BrowserModule,FormsModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
