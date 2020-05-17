import { Component, OnInit, OnDestroy } from '@angular/core';
import { Node, Edge, ClusterNode, Layout } from '@swimlane/ngx-graph';
import { Subject, Subscription } from 'rxjs';
import * as shape from 'd3-shape';
import { TechService } from 'src/app/tech.service';
import { Technology } from 'src/app/models/technology.model';

@Component({
  selector: 'app-tech-graph',
  templateUrl: './tech-graph.component.html',
  styleUrls: ['./tech-graph.component.scss']
})
export class TechGraphComponent implements OnInit, OnDestroy {
  private subs = new Subscription();
  constructor(private techService: TechService) { }


  // graph values
  // public curve = shape.curveBundle.beta(1);
  // public curve = shape.curveCardinal;
  // public curve = shape.curveCatmullRom;
  public curve = shape.curveLinear;
  // public curve = shape.curveMonotoneX;
  // public curve = shape.curveMonotoneY;
  // public curve = shape.curveNatural;
  // public curve = shape.curveStep;
  // public curve = shape.curveStepAfter;
  // public curve = shape.curveStepBefore;

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
  // public layout = 'dagre';
  public layout = 'dagreCluster';
  public layoutSettings = { orientation: 'TB' };

  public nodes: Node[];
  public edges: Edge[];

  private darkAgeCluster: ClusterNode = {
    id: 'dark age cluster',
    label: 'dark age cluster',
    childNodeIds: [],
  }
  private feudalAgeCluster: ClusterNode = {
    id: 'feudal age cluster',
    label: 'feudal age cluster',
    childNodeIds: [],
  }
  private castleAgeCluster: ClusterNode = {
    id: 'castle age cluster',
    label: 'castle age cluster',
    childNodeIds: [],
  }
  private imperialAgeCluster: ClusterNode = {
    id: 'imperial age cluster',
    label: 'imperial age cluster',
    childNodeIds: [],
  }
  public clusters: ClusterNode[] = [
    this.darkAgeCluster,
    this.feudalAgeCluster,
    this.castleAgeCluster,
    this.imperialAgeCluster
  ]

  private buildNode(tech: Technology) {
    this.nodes.push({
      id: `${tech.name}`,
      label: `${tech.name}`,
      data: { "customColor": tech.color },
    });
  }

  private buildEdges(tech: Technology) {
    if (tech.dependencies.length > 0) {
      tech.dependencies.forEach(depenency => {
        this.edges.push({
          target: `${tech.name}`,
          source: `${depenency}`
        });
      })
    }
  }

  private updateClusters(tech: Technology) {
    // build clusters
    switch (tech.age) {
      case "dark":
        this.darkAgeCluster.childNodeIds.push(tech.name)
        break;
      case "feudal":
        this.feudalAgeCluster.childNodeIds.push(tech.name)
        break;
      case "castle":
        this.castleAgeCluster.childNodeIds.push(tech.name)
        break;
      case "imperial":
        this.imperialAgeCluster.childNodeIds.push(tech.name)
        break;
    }
  }

  private clearState() {
    // clear current state
    this.nodes = []
    this.edges = []
    this.clusters.forEach(cluster => {
      cluster.childNodeIds.splice(0);
    })
  }

  ngOnInit(): void {
    this.subs.add(
      // everytime the techGraph is updated we want to clear the state
      // then build nodes, edges, and clusters
      this.techService.techGraph$.subscribe(techs => {
        this.clearState();

        techs.forEach(tech => {
          this.buildNode(tech);
          this.buildEdges(tech);
          this.updateClusters(tech);
        })
      })
    )
  }
  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

}
