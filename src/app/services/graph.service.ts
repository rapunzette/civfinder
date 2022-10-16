import { Injectable } from '@angular/core';
import { Technology } from '../models/technology.model';
import { Observable, of } from 'rxjs';
import { SelectedTechService } from './selected-tech.service';
import { switchMap } from 'rxjs/operators';
import { technologies } from '../data/technologies';

@Injectable({
  providedIn: 'root'
})
export class GraphService {
  /**
   * The list of all technologies required to support the selected technologies (including the selected techs)
   * 
   * This is built via a subscription to the selected techs, therefore it should not be modified or accessed directly
   */
  private _techGraph: Technology[] = [];
  public get techGraph(): Technology[] {
    return this._techGraph;
  }
  /**
   * The techs the user has selected plus their dependencies
   */
  public techGraph$: Observable<Technology[]>

  constructor(private selectedTechService: SelectedTechService) {
    this.techGraph$ = this.selectedTechService.selectedTechs$.pipe(
      switchMap(nowSelectedTechs => {
        this.buildGraph(nowSelectedTechs);
        return of(this.techGraph);
      })
    )
  }

  /**
 * Adds a technology and its dependecies to the graph
 * @param tech the technology to be added to the graph
 */
  private add(tech: Technology) {
    // ensure it is not already added
    let i: number = this.techGraph.indexOf(tech)
    if (i < 0) {
      this.techGraph.push(tech);
    }

    // recursively add prerequisites
    if (tech.dependencies != null && tech.dependencies.length > 0) {
      tech.dependencies.forEach(dependency => {
        let prerequisiteTech: Technology = this.getTechByName(dependency)
        this.add(prerequisiteTech);
      })
    }
  }

  /**
* Removes a technology and its dependents from the graph
* @param tech the technology to be removed from the graph
*/
  private remove(techToDelete: Technology) {
    let graphIndex = this.techGraph.indexOf(techToDelete)
    if (graphIndex < 0) {
      return;
    }
    this.techGraph.splice(graphIndex, 1);


    // remove dependent techs if they exist
    this.techGraph.filter(selectedTech => {
      return selectedTech.dependencies?.indexOf(techToDelete.name) > -1;
    }).forEach(dependentTech => this.remove(dependentTech));;

  }


  private buildGraph(selectedTechs: Technology[]): void {
    this.techGraph.splice(0);
    selectedTechs.forEach(tech => this.add(tech))
  }

  private getTechByName(name: string): Technology {
    return technologies.find(tech => tech.name === name);
  }
}
