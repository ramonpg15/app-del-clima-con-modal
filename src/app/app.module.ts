import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ModalComponent } from './shared/modal/modal.component';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { DigitOnlyModule } from '@uiowa/digit-only';
import {HttpClientModule} from '@angular/common/http';
import { ClimaComponent } from './components/clima/clima.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,
    ClimaComponent
  ],
  imports: [
    BrowserModule,NgbModule,BrowserAnimationsModule,DigitOnlyModule,HttpClientModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
