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
export class TechChipAreaComponent implements OnInit {
  techCtrl = new FormControl();
  filteredTechs: Observable<Technology[]>;
  @ViewChild('techInput') techInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto') matAutocomplete: MatAutocomplete;

  constructor(public techService: TechService) { }

  ngOnInit(): void {
    this.filteredTechs = this.techCtrl.valueChanges.pipe(
      startWith(null),
      map((usrInput: string | Technology | null) => usrInput ? this._filter(usrInput) : technologies));
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
