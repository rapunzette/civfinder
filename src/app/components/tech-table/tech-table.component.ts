import { Component, OnInit } from '@angular/core';
import { Technology } from 'src/app/models/technology.model';
import { technologies } from 'src/app/data/technologies';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-tech-table',
  templateUrl: './tech-table.component.html',
  styleUrls: ['./tech-table.component.scss']
})
export class TechTableComponent implements OnInit {

  public techs: Technology[] = technologies;

  public displayedColumns = ['name', 'age', 'color'];
  public dataSource: MatTableDataSource<Technology>;

  constructor() { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.techs);
  }

}
