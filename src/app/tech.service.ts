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

    // recursively add parents
    if (tech.parentName != null) {
      let parentTech: Technology = this.getTechByName(tech.parentName)
      this.add(parentTech);
    }

    this.updateSubject();
  }

  public remove(tech: Technology) {
    let i: number = this.selectedTechs.indexOf(tech)
    if (i < 0) {
      return;
    }
    this.selectedTechs.splice(i, 1);

    this.updateSubject();
  }

  public toggle(tech: Technology) {
    let i: number = this.selectedTechs.indexOf(tech)

    // is is already selected?
    if (i >= 0) {
      this.selectedTechs.splice(i, 1); // yes, so remove
    } else {
      this.add(tech); // no, so add
    }


    this.updateSubject();
  }

  private updateSubject() {
    this.subject.next(this.selectedTechs)
  }
  constructor() { }
}
