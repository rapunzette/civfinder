import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from "@angular/material/button";

import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';

import { MatTableModule } from '@angular/material/table';
import { TechTableComponent } from './components/tech-table/tech-table.component';

@NgModule({
  declarations: [
    AppComponent,
    TechTableComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    AngularFireModule.initializeApp(environment.firebase),
    MatTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
