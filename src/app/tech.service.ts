import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Technology } from './models/technology.model';
import { technologies } from './data/technologies';

@Injectable({
  providedIn: 'root'
})
export class TechService {
  private selectedTechs: Technology[] = [];
  private subject = new BehaviorSubject(this.selectedTechs);
  public selectedTechs$ = this.subject.asObservable();


  public clear() {
    this.selectedTechs.splice(0);

    this.updateSubject();
  }


  public getTechByName(name: string): Technology {
    return technologies.find((tech) => tech.name === name);
  }

  public add(tech: Technology) {
    // ensure it is not already added
    let i: number = this.selectedTechs.indexOf(tech)
    if (i < 0) {
      this.selectedTechs.push(tech);
    }

    // recursively add prerequisites
    if (tech.dependencies != null && tech.dependencies.length > 0) {
      tech.dependencies.forEach((dependency) => {
        let prerequisiteTech: Technology = this.getTechByName(dependency)
        this.add(prerequisiteTech);
      })
    }

    this.updateSubject();
  }

  public remove(techToDelete: Technology, index?: number) {
    index = index || this.selectedTechs.indexOf(techToDelete)
    if (index < 0) {
      return;
    }
    this.selectedTechs.splice(index, 1);

    // remove dependent techs if they exist
    this.selectedTechs.filter((selectedTech) => {
      return selectedTech.dependencies?.indexOf(techToDelete.name) > -1;
    }).forEach(dependentTech => this.remove(dependentTech));;

    this.updateSubject();
  }

  public toggle(tech: Technology) {
    // add or remove depending if the tech is already selected
    let i: number = this.selectedTechs.indexOf(tech)
    if (i >= 0) {
      this.remove(tech, i);
    } else {
      this.add(tech);
    }


    this.updateSubject();
  }

  private updateSubject() {
    this.subject.next(this.selectedTechs)
  }
  constructor() { }
}
