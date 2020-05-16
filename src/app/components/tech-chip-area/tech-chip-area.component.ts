import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { MatAutocomplete, MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { startWith, map } from 'rxjs/operators';
import { MatChipInputEvent } from '@angular/material/chips';
import { Technology } from 'src/app/models/technology.model';
import { technologies } from 'src/app/data/technologies';
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
   */
  techs: Technology[] = [];

  @ViewChild('techInput') techInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto') matAutocomplete: MatAutocomplete;

  constructor(public techService: TechService) {
    this.filteredTechs = this.techCtrl.valueChanges.pipe(
      startWith(null),
      map((usrInput: string | Technology | null) => usrInput ? this._filter(usrInput) : technologies));
  }

  remove(tech: Technology): void {
    const index = this.techs.indexOf(tech);

    if (index >= 0) {
      this.techs.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    let newTech: Technology = event.option.value;
    this.techs.push(newTech);
    this.techInput.nativeElement.value = '';
    this.techCtrl.setValue(null);
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
