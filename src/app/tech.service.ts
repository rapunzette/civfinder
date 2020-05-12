import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Technology } from './models/technology.model';

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

  public toggle(tech: Technology) {
    let i: number = this.selectedTechs.indexOf(tech)
    i >= 0 ? // is is already selected?
      this.selectedTechs.splice(i, 1) : // yes, so remove
      this.selectedTechs.push(tech); // no, so add


    this.updateSubject();
  }

  private updateSubject() {
    this.subject.next(this.selectedTechs)
  }
  constructor() { }
}
