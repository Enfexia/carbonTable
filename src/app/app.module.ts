import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  UIShellModule,
  IconModule,
  SearchModule,
  DialogModule,
  NFormsModule,
  ButtonModule,
  TableModule,
} from 'carbon-components-angular';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UIShellModule,
    IconModule,
    SearchModule,
    DialogModule,
    NFormsModule,
    ButtonModule,
    TableModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
