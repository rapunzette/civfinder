import { Component, AfterViewInit, OnDestroy, ViewChild, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Civilization } from 'src/app/models/civilization.model';
import { civilizations } from 'src/app/data/civilizations';
import { TechService } from 'src/app/tech.service';
import { Subscription } from 'rxjs';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-civ-table',
  templateUrl: './civ-table.component.html',
  styleUrls: ['./civ-table.component.scss']
})
export class CivTableComponent implements AfterViewInit, OnDestroy, OnInit {
  public displayedColumns = ['name'];
  public dataSource: MatTableDataSource<Civilization>;

  @ViewChild(MatSort) sort: MatSort;

  constructor(private techService: TechService) { }

  ngOnInit(): void {

    this.dataSource = new MatTableDataSource(civilizations);
  }


  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }

  ngOnDestroy(): void {
  }

}
