import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Civilization } from 'src/app/models/civilization.model';
import { civilizations } from '../data/civilizations';
@Injectable({
  providedIn: 'root'
})
export class CivilizationService {


  private civMap: Map<string, Civilization> = new Map();
  public civMap$: BehaviorSubject<Map<string, Civilization>> = new BehaviorSubject(new Map());

  constructor() {
    for (const civ of civilizations) {
      this.civMap.set(civ.name, civ)
    }

  }


  public toggleStrict() {
    this.civMap.get("celts").squires = !(this.civMap.get("celts").squires)
    this.civMap.get("franks").bloodlines = !this.civMap.get("franks").bloodlines

    this.civMap$.next(this.civMap)
  }


}
