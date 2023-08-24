import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CsvViewerComponent } from './csv-viewer/csv-viewer.component';
import {ScrollingModule} from '@angular/cdk/scrolling';
//import * as sql from 'mssql';

@NgModule({
  declarations: [
    AppComponent,
    CsvViewerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ScrollingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
