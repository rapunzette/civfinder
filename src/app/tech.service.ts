import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Technology } from './models/technology.model';
import { technologies } from './data/technologies';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TechService {
  private techGraph: Technology[] = [];
  /**
   * The techs the user has selected plus their dependencies
   */
  public techGraph$: Observable<Technology[]>
  // public techGraph$ = this.techGraphSubject.asObservable();

  private selectedTechs: Technology[] = [];
  private selectedTechsSubject = new BehaviorSubject(this.selectedTechs);
  /**
   * The techs the user has selected 
   */
  public selectedTechs$ = this.selectedTechsSubject.asObservable();


  public clear() {
    this.techGraph.splice(0);

  }


  public getTechByName(name: string): Technology {
    return technologies.find((tech) => tech.name === name);
  }

  /**
   * The user action of selecting a desired technology
   * 
   */
  public select(tech: Technology): void {
    // only select the tech if it has not already been selected
    if (this.selectedTechs.indexOf(tech) < 0) {
      this.selectedTechs.push(tech);

      // add tech and its dependencies to the graph
      this.add(tech);

      //update accordingly
      this.updateSelectedSubject();
    }

  }

  /**
   * Adds a technology and its dependecies to the graph
   * @param tech 
   */
  public add(tech: Technology) {
    // ensure it is not already added
    let i: number = this.techGraph.indexOf(tech)
    if (i < 0) {
      this.techGraph.push(tech);
    }

    // recursively add prerequisites
    if (tech.dependencies != null && tech.dependencies.length > 0) {
      tech.dependencies.forEach((dependency) => {
        let prerequisiteTech: Technology = this.getTechByName(dependency)
        this.add(prerequisiteTech);
      })
    }

    // this.updateGraphSubject();
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

  public remove(techToDelete: Technology) {
    let graphIndex = this.techGraph.indexOf(techToDelete)
    if (graphIndex < 0) {
      return;
    }
    this.techGraph.splice(graphIndex, 1);


    // remove dependent techs if they exist
    this.techGraph.filter((selectedTech) => {
      return selectedTech.dependencies?.indexOf(techToDelete.name) > -1;
    }).forEach(dependentTech => this.remove(dependentTech));;

  }

  public toggle(tech: Technology) {
    // add or remove depending if the tech is already selected
    let i: number = this.techGraph.indexOf(tech)
    if (i >= 0) {
      this.remove(tech);
    } else {
      this.add(tech);
    }
  }

  private updateSelectedSubject() {
    this.selectedTechsSubject.next(this.selectedTechs)

  }


  private buildGraph() {
    this.techGraph = [];
    this.selectedTechs.forEach((tech) => this.add(tech))

    return this.techGraph;
  }


  constructor() {
    this.techGraph$ = this.selectedTechs$.pipe(
      switchMap((nowSelectedTechs) => {
        this.buildGraph();
        return of(this.techGraph);
      })
    )
  }
}
