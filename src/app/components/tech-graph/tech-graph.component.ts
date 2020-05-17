import { Component, OnInit, OnDestroy } from '@angular/core';
import { Node, Edge, ClusterNode, Layout } from '@swimlane/ngx-graph';
import { Subject, Subscription } from 'rxjs';
import * as shape from 'd3-shape';
import { TechService } from 'src/app/tech.service';
import { technologies } from 'src/app/data/technologies';

@Component({
  selector: 'app-tech-graph',
  templateUrl: './tech-graph.component.html',
  styleUrls: ['./tech-graph.component.scss']
})
export class TechGraphComponent implements OnInit, OnDestroy {
  private subs = new Subscription();
  constructor(private techService: TechService) { }


  // graph values
  public curve = shape.curveBundle.beta(1);
  public draggingEnabled: boolean = false;
  public panningEnabled: boolean = true;
  public zoomEnabled: boolean = true;
  public zoomSpeed: number = 0.1;
  public minZoomLevel: number = 0.1;
  public maxZoomLevel: number = 400.0;
  public panOnZoom: boolean = true;
  public autoZoom: boolean = true;
  public autoCenter: boolean = true;
  public update$: Subject<boolean> = new Subject();
  public center$: Subject<boolean> = new Subject();
  public zoomToFit$: Subject<boolean> = new Subject();
  public layout = 'dagre';
  // public layout = 'dagreCluster';
  public layoutSettings = { orientation: 'TB' };

  public nodes: Node[];
  public edges: Edge[];

  public clusters: ClusterNode[] = [
    {
      id: 'dark age cluster',
      label: 'dark age cluster',
      childNodeIds: technologies.filter(tech => tech.age === "dark").map(tech => tech.name),
    },
    {
      id: 'feudal age cluster',
      label: 'feudal age cluster',
      childNodeIds: technologies.filter(tech => tech.age === "feudal").map(tech => tech.name),
    },
    {
      id: 'castle age cluster',
      label: 'castle age cluster',
      childNodeIds: technologies.filter(tech => tech.age === "castle").map(tech => tech.name),
    },
    {
      id: 'imperial age cluster',
      label: 'imperial age cluster',
      childNodeIds: technologies.filter(tech => tech.age === "imperial").map(tech => tech.name),
    },
  ]

  ngOnInit(): void {
    this.subs.add(
      this.techService.techGraph$.subscribe(techs => {
        // convert techs into nodes and links
        this.nodes = []
        this.edges = []
        techs.forEach(tech => {
          this.nodes.push({
            id: `${tech.name}`,
            label: `${tech.name}`,
            data: { color: `${tech.color}` }
          });
          if (tech.dependencies.length > 0) {
            tech.dependencies.forEach(depenency => {
              this.edges.push({
                target: `${tech.name}`,
                source: `${depenency}`
              });
            })

          }
        })
      })
    )
  }
  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

}
