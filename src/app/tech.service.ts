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

  public add(tech: Technology) {
    this.selectedTechs.push(tech);

    this.updateSubject();
  }

  public remove(tech: Technology) {
    let i: number = this.selectedTechs.indexOf(tech)
    this.selectedTechs.splice(i, 1);

    this.updateSubject();
  }

  private updateSubject() {
    this.subject.next(this.selectedTechs)
  }
  constructor() { }
}
