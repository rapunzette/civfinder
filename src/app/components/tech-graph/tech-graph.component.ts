import { Component, OnInit, OnDestroy } from '@angular/core';
import { Node, Edge, ClusterNode, Layout } from '@swimlane/ngx-graph';
import { Subject, Subscription } from 'rxjs';
import * as shape from 'd3-shape';
import { TechService } from 'src/app/tech.service';

@Component({
  selector: 'app-tech-graph',
  templateUrl: './tech-graph.component.html',
  styleUrls: ['./tech-graph.component.scss']
})
export class TechGraphComponent implements OnInit, OnDestroy {
  private subs = new Subscription();
  constructor(private techService: TechService) { }


  // graph values
  curve = shape.curveBundle.beta(1);
  draggingEnabled: boolean = true;
  panningEnabled: boolean = true;
  zoomEnabled: boolean = true;
  zoomSpeed: number = 0.1;
  minZoomLevel: number = 0.1;
  maxZoomLevel: number = 4.0;
  panOnZoom: boolean = true;
  autoZoom: boolean = true;
  autoCenter: boolean = true;
  update$: Subject<boolean> = new Subject();
  center$: Subject<boolean> = new Subject();
  zoomToFit$: Subject<boolean> = new Subject();
  layout = 'dagreCluster';
  public layoutSettings = {
    orientation: 'TB'
  };

  public nodes: Node[] = [
    {
      id: 'first',
      label: 'first'
    }, {
      id: 'second',
      label: 'B'
    }, {
      id: 'c1',
      label: 'C1'
    }, {
      id: 'c2',
      label: 'C2'
    }
  ];

  public edges: Edge[] = [
    {
      source: 'first',
      target: 'second',
      label: 'is parent of'
    }, {
      source: 'first',
      target: 'c1',
      label: 'custom label'
    }, {
      source: 'first',
      target: 'c1',
      label: 'custom label'
    }, {
      source: 'first',
      target: 'c2',
      label: 'custom label'
    }
  ];

  public clusters: ClusterNode[] = [
    {
      id: 'third',
      label: 'C',
      childNodeIds: ['c1', 'c2']
    }
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
            label: `${tech.name}`
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
