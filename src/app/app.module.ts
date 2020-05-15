import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from "@angular/material/button";

import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';

import { MatTableModule } from '@angular/material/table';
import { TechTableComponent } from './components/tech-table/tech-table.component';
import { CivTableComponent } from './components/civ-table/civ-table.component';
import { MatSortModule } from '@angular/material/sort';
import { TechCellComponent } from './components/tech-cell/tech-cell.component';
import { CivCellComponent } from './components/civ-cell/civ-cell.component';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTooltipModule } from '@angular/material/tooltip';
@NgModule({
  declarations: [
    AppComponent,
    TechTableComponent,
    CivTableComponent,
    TechCellComponent,
    CivCellComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    AngularFireModule.initializeApp(environment.firebase),
    MatTableModule,
    MatSortModule,
    MatButtonModule,
    MatSidenavModule,
    MatTooltipModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
