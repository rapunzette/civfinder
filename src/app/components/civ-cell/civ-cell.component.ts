import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Civilization } from 'src/app/models/civilization.model';
import { TechService } from 'src/app/tech.service';
import { Technology } from 'src/app/models/technology.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-civ-cell',
  templateUrl: './civ-cell.component.html',
  styleUrls: ['./civ-cell.component.scss']
})
export class CivCellComponent implements OnInit, OnDestroy {
  private subs = new Subscription();

  @Input() public civ: Civilization;

  public iconPath: string;

  public qualify: boolean = true;

  /**
   * Clear all selected techs then select all techs this civilization has.
   */
  public buttonPressed() {
    this.techService.clear();
    for (var property in this.civ) {
      if (this.civ[property] === true) {
        let techToAdd: Technology = this.techService.getTechByName(property)
        this.techService.add(techToAdd);
      }
    }
  }

  constructor(private techService: TechService) { }

  ngOnInit(): void {
    this.iconPath = `assets/civs/${this.civ.name}.png`;

    // determine if this civ has all the selected techs
    this.subs.add(
      this.techService.selectedTechs$.subscribe(selectedTechs => {
        this.qualify = selectedTechs.every(tech => this.civ[tech.name])
      })
    );
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }


}
