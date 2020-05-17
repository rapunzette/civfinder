import { Component, OnInit } from '@angular/core';
import { Node, Edge, ClusterNode, Layout } from '@swimlane/ngx-graph';
import { Subject } from 'rxjs';
import * as shape from 'd3-shape';

@Component({
  selector: 'app-tech-graph',
  templateUrl: './tech-graph.component.html',
  styleUrls: ['./tech-graph.component.scss']
})
export class TechGraphComponent implements OnInit {
  private myNode: Node;
  private myEdge: Edge;
  constructor() { }

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
      label: 'A'
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

  public links: Edge[] = [
    {
      id: 'a',
      source: 'first',
      target: 'second',
      label: 'is parent of'
    }, {
      id: 'b',
      source: 'first',
      target: 'c1',
      label: 'custom label'
    }, {
      id: 'c',
      source: 'first',
      target: 'c1',
      label: 'custom label'
    }, {
      id: 'd',
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
  }

}
