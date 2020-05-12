import { Component, OnInit } from '@angular/core';

import * as techs from 'src/app/data/technologies';

@Component({
  selector: 'app-tech-table',
  templateUrl: './tech-table.component.html',
  styleUrls: ['./tech-table.component.scss']
})
export class TechTableComponent implements OnInit {

  public techs = techs;


  constructor() { }

  ngOnInit(): void {
  }

}
