import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { MatAutocomplete, MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { startWith, map } from 'rxjs/operators';
import { Technology } from 'src/app/models/technology.model';
import { technologies } from 'src/app/data/technologies';
import { SelectedTechService } from 'src/app/services/selected-tech.service';
import { shuffle } from 'lodash'
@Component({
  selector: 'app-tech-chip-area',
  templateUrl: './tech-chip-area.component.html',
  styleUrls: ['./tech-chip-area.component.scss']
})
export class TechChipAreaComponent implements OnInit {
  techCtrl = new FormControl();
  filteredTechs: Observable<Technology[]>;
  @ViewChild('techInput') techInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto') matAutocomplete: MatAutocomplete;

  constructor(public techService: SelectedTechService) { }

  ngOnInit(): void {
    this.filteredTechs = this.techCtrl.valueChanges.pipe(
      startWith(null),
      map((usrInput: string | Technology | null) => usrInput ? this._filter(usrInput) : technologies));

    // just a default selection to nudge users
    // selects one blue, one green, and one red tech
    let allTechs = shuffle(technologies);
    let blueTech: Technology = allTechs.find(tech => tech.color === "blue");
    let redTech: Technology = allTechs.find(tech => tech.color === "red" && tech.age != "dark");
    let greenTech: Technology = allTechs.find(tech => tech.color === "green");
    this.techService.select(blueTech);
    this.techService.select(redTech);
    this.techService.select(greenTech);

  }

  /**
   * called when a user selects a tech from the drop down chip input
   * 
   */
  public selected(event: MatAutocompleteSelectedEvent): void {
    let newTech: Technology = event.option.value;
    // add the tech only if it hasn't already been selected
    this.techService.select(newTech);
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
