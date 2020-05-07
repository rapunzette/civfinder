import { Component, OnInit, OnDestroy } from '@angular/core';
import { Technology } from './models/technology.model';
import { Civilization } from './models/civilization.model';

import { civilizations } from './data/civilizations';
import { technologies } from './data/technologies';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'civfinder';
  public techs: Technology[] = technologies;
  selectedTechs: string[] = [];
  public civs: Civilization[] = civilizations;
  correspondingCivs: Civilization[];

  public onChange(tech: Technology, checked: boolean): void {

    if (checked) {
      this.selectedTechs.push(tech.name);

    } else {
      let i: number = this.selectedTechs.indexOf(tech.name)
      this.selectedTechs.splice(i, 1);
    }

    this.updateCorrespondingCivs();
  }

  private updateCorrespondingCivs(): void {

    this.correspondingCivs = this.civs.filter(civ => {
      return this.selectedTechs.every(tech => {
        return civ[tech];
      });
    })
  }

  constructor() {
  }
  ngOnInit(): void {
    this.updateCorrespondingCivs();
  }
  ngOnDestroy() {
  }
}
