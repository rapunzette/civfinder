import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Civilization } from 'src/app/models/civilization.model';
import { SelectedTechService } from 'src/app/services/selected-tech.service';
import { Subscription } from 'rxjs';
import { CivilizationService } from 'src/app/services/civilization.service';
import { GraphService } from 'src/app/services/graph.service';

@Component({
  selector: 'app-civ-cell',
  templateUrl: './civ-cell.component.html',
  styleUrls: ['./civ-cell.component.scss']
})
export class CivCellComponent implements OnInit, OnDestroy {
  private subs = new Subscription();
  public civ: Civilization

  constructor(
    private techService: SelectedTechService,
    private civService: CivilizationService,
    private graphService: GraphService
  ) { }

  @Input('civ') set civReceived(_civ: Civilization) {
    this.civ = _civ;
  }

  public iconPath: string;

  public qualify: boolean = true;

  public logCost() {
    // the calculation requires all techs in the dependency graph, not just the selected ones
    console.log(`${this.civ.name} ${this.civ.calculateCost(this.graphService.techGraph)}`);


  }


  ngOnInit(): void {
    this.iconPath = `assets/civs/${this.civ.name}.png`;


    // if user toggles strict mode
    this.subs.add(
      this.civService.civMap$.subscribe(civMap => {
        if (civMap.size > 0) {
          this.civ = civMap.get(this.civ.name)
          this.checkIfQualify()

        }
      })
    )

    // if user selects new techs of interest
    this.subs.add(
      this.techService.selectedTechs$.subscribe(selectedTechs => {
        this.checkIfQualify();
      })
    );

  }

  private checkIfQualify() {
    this.qualify = this.techService.selectedTechs.every(tech => this.civ[tech.name])
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }


}
