import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from "@angular/material/button";

import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';

import { TechTableComponent } from './components/tech-table/tech-table.component';
import { CivTableComponent } from './components/civ-table/civ-table.component';
import { MatSortModule } from '@angular/material/sort';
import { TechCellComponent } from './components/tech-cell/tech-cell.component';
import { CivCellComponent } from './components/civ-cell/civ-cell.component';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatGridListModule } from '@angular/material/grid-list';
import { TechSearchComponent } from './components/tech-search/tech-search.component';
import { MatInputModule } from '@angular/material/input';
import { TechChipAreaComponent } from './components/tech-chip-area/tech-chip-area.component';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { NgxGraphModule } from '@swimlane/ngx-graph';
import { TechGraphComponent } from './components/tech-graph/tech-graph.component';
import { TechColorPipePipe } from './tech-color-pipe.pipe'

@NgModule({
  declarations: [
    AppComponent,
    TechTableComponent,
    CivTableComponent,
    TechCellComponent,
    CivCellComponent,
    TechSearchComponent,
    TechChipAreaComponent,
    TechGraphComponent,
    TechColorPipePipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    AngularFireModule.initializeApp(environment.firebase),
    MatSortModule,
    MatButtonModule,
    MatSidenavModule,
    MatTooltipModule,
    MatGridListModule,
    MatInputModule,
    MatChipsModule,
    MatIconModule,
    MatAutocompleteModule,
    FormsModule,
    ReactiveFormsModule,
    NgxGraphModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
