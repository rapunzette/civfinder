import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Technology } from './models/technology.model';

@Injectable({
  providedIn: 'root'
})
export class TechService {
  private selectedTechs: Technology[] = [];
  private source = new BehaviorSubject(this.selectedTechs);
  public selectedTechs$ = this.source.asObservable();

  add(techName: Technology) {
    this.selectedTechs.push(techName);

    this.updateSubject();
  }

  remove(techName: Technology) {
    let i: number = this.selectedTechs.indexOf(techName)
    this.selectedTechs.splice(i, 1);

    this.updateSubject();
  }

  private updateSubject() {

    this.source.next(this.selectedTechs)
  }
  constructor() { }
}
