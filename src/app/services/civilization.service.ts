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
    this.civMap.get("saracens").guilds = !this.civMap.get("saracens").guilds
    this.civMap.get("byzantines").masonry = !this.civMap.get("byzantines").masonry
    this.civMap.get("byzantines").architecture = !this.civMap.get("byzantines").architecture
    this.civMap.get("cumans").husbandry = !this.civMap.get("cumans").husbandry
    this.civMap.get("goths").supplies = !this.civMap.get("goths").supplies
    this.civMap.get("goths").arson = !this.civMap.get("goths").arson
    this.civMap.get("poles").hussar = !this.civMap.get("poles").hussar
    this.civMap.get("poles")['hussar research'] = !this.civMap.get("poles")['hussar research']
    this.civMap.get("lithuanians").hussar = !this.civMap.get("lithuanians").hussar
    this.civMap.get("lithuanians")['hussar research'] = !this.civMap.get("lithuanians")['hussar research']
    this.civMap.get("sicilians")['watch tower'] = !this.civMap.get("sicilians")['watch tower']
    this.civMap.get("sicilians")['guard tower'] = !this.civMap.get("sicilians")['guard tower']
    this.civMap.get("sicilians")['guard tower research'] = !this.civMap.get("sicilians")['guard tower research']
    this.civMap.get("sicilians")['keep'] = !this.civMap.get("sicilians")['keep']
    this.civMap.get("sicilians")['keep research'] = !this.civMap.get("sicilians")['keep research']

    this.civMap$.next(this.civMap)
  }


}
