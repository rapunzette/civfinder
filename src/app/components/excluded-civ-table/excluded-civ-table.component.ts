import { Component, OnInit, OnDestroy, ViewChild, AfterViewInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import { Civilization } from 'src/app/models/civilization.model';
import { TechService } from 'src/app/tech.service';
import { civilizations } from 'src/app/data/civilizations';
import { difference } from 'lodash';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-excluded-civ-table',
  templateUrl: './excluded-civ-table.component.html',
  styleUrls: ['./excluded-civ-table.component.scss']
})
export class ExcludedCivTableComponent implements OnInit, OnDestroy, AfterViewInit {
  private subs: Subscription = new Subscription;
  public displayedColumns = ['name'];
  public dataSource: MatTableDataSource<Civilization>;

  @ViewChild(MatSort) sort: MatSort;

  constructor(private techService: TechService) { }

  ngOnInit(): void {
    this.subs.add(
      this.techService.selectedTechs$.subscribe(selectedTechs => {
        let correspondingCivs = civilizations.filter(civ => {
          return selectedTechs.every(tech => {
            return civ[tech.name];
          });
        });

        let excludedCivs = difference(civilizations, correspondingCivs);

        this.dataSource = new MatTableDataSource(excludedCivs);
        this.dataSource.sort = this.sort;
      })

    );
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
