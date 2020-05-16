import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { MatAutocomplete, MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { startWith, map } from 'rxjs/operators';
import { Technology } from 'src/app/models/technology.model';
import { technologies, halberdier } from 'src/app/data/technologies';
import { TechService } from 'src/app/tech.service';
@Component({
  selector: 'app-tech-chip-area',
  templateUrl: './tech-chip-area.component.html',
  styleUrls: ['./tech-chip-area.component.scss']
})
export class TechChipAreaComponent {
  visible = true;
  selectable = true;
  techCtrl = new FormControl();
  filteredTechs: Observable<Technology[]>;
  /**
   * The techs selected by the user
   * 
   * These will appear as chips
   * 
   * Note: this list is entirely local to this component. Meaning the entire tech dependency tree/graph will not show up here
   */
  techs: Technology[] = [halberdier];

  @ViewChild('techInput') techInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto') matAutocomplete: MatAutocomplete;

  constructor(public techService: TechService) {
    this.filteredTechs = this.techCtrl.valueChanges.pipe(
      startWith(null),
      map((usrInput: string | Technology | null) => usrInput ? this._filter(usrInput) : technologies));
  }

  /**
   * Called when the user clicks the 'X' next to a chip
   * @param tech The tech to be removed
   */
  public remove(tech: Technology): void {
    const index = this.techs.indexOf(tech);

    if (index >= 0) {
      this.techs.splice(index, 1);
    }

    this.techService.remove(tech);
  }

  /**
   * called when a user selects a tech from the drop down chip input
   * 
   */
  public selected(event: MatAutocompleteSelectedEvent): void {
    let newTech: Technology = event.option.value;
    this.techs.push(newTech);
    this.techInput.nativeElement.value = '';
    this.techCtrl.setValue(null);

    this.techService.add(newTech);
  }


  public imagePathOf(tech: Technology): string {
    return `assets/techs/${tech.name}.png`;
  }

  private _filter(userSearch: any): Technology[] {
    // userSearch is type 'any' because it can come through as string or Technology
    const filterValue = userSearch.name != null ? userSearch.name.toLowerCase() : userSearch.toLowerCase();

    return technologies.filter(tech => tech.name.includes(filterValue));
  }


}
