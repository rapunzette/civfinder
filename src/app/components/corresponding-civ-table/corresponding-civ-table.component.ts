import { Component, AfterViewInit, OnDestroy, ViewChild, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Civilization } from 'src/app/models/civilization.model';
import { civilizations } from 'src/app/data/civilizations';
import { TechService } from 'src/app/tech.service';
import { Subscription } from 'rxjs';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-corresponding-civ-table',
  templateUrl: './corresponding-civ-table.component.html',
  styleUrls: ['./corresponding-civ-table.component.scss']
})
export class CorrespondingCivTableComponent implements AfterViewInit, OnDestroy, OnInit {
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

        this.dataSource = new MatTableDataSource(correspondingCivs);
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
