import { Component, OnInit, Input, AfterViewInit, OnDestroy } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Civilization } from 'src/app/models/civilization.model';
import { civilizations } from 'src/app/data/civilizations';
import { TechService } from 'src/app/tech.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-corresponding-civ-table',
  templateUrl: './corresponding-civ-table.component.html',
  styleUrls: ['./corresponding-civ-table.component.scss']
})
export class CorrespondingCivTableComponent implements OnInit, OnDestroy {
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

        this.dataSource = new MatTableDataSource(correspondingCivs);
      })

    )
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

}
