import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Technology } from '../models/technology.model';

@Injectable({
  providedIn: 'root'
})
export class SelectedTechService {


  public selectedTechs: Technology[] = [];
  private selectedTechsSubject = new BehaviorSubject(this.selectedTechs);
  /**
   * The techs the user has selected 
   */
  public selectedTechs$ = this.selectedTechsSubject.asObservable();


  public clear() {
    this.selectedTechs.splice(0);

    this.updateSelectedSubject();
  }


  /**
   * The user action of selecting a desired technology
   * 
   */
  public select(tech: Technology): void {
    // only select the tech if it has not already been selected
    if (this.selectedTechs.indexOf(tech) < 0) {
      this.selectedTechs.push(tech);


      //update accordingly
      this.updateSelectedSubject();
    }

  }




  /**
   * The user action of deselecting a desired technology
   * 
   */
  public deselect(tech: Technology): void {
    // only deselect the tech if it has already been selected
    let i = this.selectedTechs.indexOf(tech);
    if (i > -1) {
      this.selectedTechs.splice(i, 1);

      //update accordingly
      this.updateSelectedSubject();
    }

  }


  private updateSelectedSubject() {
    this.selectedTechsSubject.next(this.selectedTechs)

  }
  constructor() { }
}
