import { Component, OnInit, OnDestroy } from '@angular/core';
import { Technology } from './models/technology.model';
import { Civilization } from './models/civilization.model';

import { technologies } from './data/technologies';

import { TechService } from './tech.service';

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
   * Civilizations that do NOT have the selected technologies
   */
  public excludedCivs: Civilization[];

  public displayedColumns = ['name', 'age', 'color'];

  /**
   * Ran everytime a new technology is selected or unselected
   * @param tech the technology in question
   * @param nowChecked the status of the technology
   */
  public onChange(tech: Technology, nowChecked: boolean): void {

    if (nowChecked) {
      this.techService.add(tech);

    } else {
      this.techService.remove(tech);
    }
  }

  constructor(private techService: TechService) {
  }
  ngOnInit(): void {
  }
  ngOnDestroy() {
  }
}
