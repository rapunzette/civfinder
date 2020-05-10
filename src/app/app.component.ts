import { Component, OnInit, OnDestroy } from '@angular/core';
import { Technology } from './models/technology.model';
import { Civilization } from './models/civilization.model';

import { civilizations } from './data/civilizations';
import { technologies } from './data/technologies';

import { difference } from 'lodash';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  /**
   * A list of all technologies.
   * 
   * This does not include unique techs for now
   */
  public techs: Technology[] = technologies;
  /**
   * The technologies the user cares about
   */
  public selectedTechs: string[] = [];
  /**
 * Civilizations that have the selected technologies
 */
  public correspondingCivs: Civilization[];
  /**
   * Civilizations that do NOT have the selected technologies
   */
  public excludedCivs: Civilization[];

  public displayedColumns = ['name', 'age', 'color'];
  public dataSource: MatTableDataSource<Technology>;

  /**
   * Ran everytime a new technology is selected or unselected
   * @param tech the technology in question
   * @param nowChecked the status of the technology
   */
  public onChange(tech: Technology, nowChecked: boolean): void {

    if (nowChecked) {
      this.selectedTechs.push(tech.name);

    } else {
      let i: number = this.selectedTechs.indexOf(tech.name)
      this.selectedTechs.splice(i, 1);
    }

    this.updateCivs();
  }

  /**
   * Updates correspondingCivs and excludedCivs depending on the selected techs
   */
  private updateCivs(): void {

    this.correspondingCivs = civilizations.filter(civ => {
      return this.selectedTechs.every(tech => {
        return civ[tech];
      });
    });

    this.excludedCivs = difference(civilizations, this.correspondingCivs);
  }

  constructor() {
  }
  ngOnInit(): void {
    this.updateCivs();
    this.dataSource = new MatTableDataSource(this.techs);
  }
  ngOnDestroy() {
  }
}
