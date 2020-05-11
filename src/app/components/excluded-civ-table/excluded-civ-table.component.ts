import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import { Civilization } from 'src/app/models/civilization.model';
import { TechService } from 'src/app/tech.service';
import { civilizations } from 'src/app/data/civilizations';
import { difference } from 'lodash';

@Component({
  selector: 'app-excluded-civ-table',
  templateUrl: './excluded-civ-table.component.html',
  styleUrls: ['./excluded-civ-table.component.scss']
})
export class ExcludedCivTableComponent implements OnInit, OnDestroy {
  private subs: Subscription = new Subscription;
  public displayedColumns = ['name'];
  public dataSource: MatTableDataSource<Civilization>;

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
      })

    )
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
