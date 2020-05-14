import { Component, OnInit, Input } from '@angular/core';
import { Civilization } from 'src/app/models/civilization.model';
import { TechService } from 'src/app/tech.service';
import { Technology } from 'src/app/models/technology.model';

@Component({
  selector: 'app-civ-cell',
  templateUrl: './civ-cell.component.html',
  styleUrls: ['./civ-cell.component.scss']
})
export class CivCellComponent implements OnInit {

  @Input() public civ: Civilization;

  public iconPath: string;

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
    this.iconPath = `assets/civs/${this.civ.name}.png`
  }

}
