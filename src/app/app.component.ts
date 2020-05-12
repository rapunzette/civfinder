import { Component, OnInit, OnDestroy } from '@angular/core';

import { TechService } from './tech.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  constructor(public techService: TechService) {
  }
  ngOnInit(): void {
  }
  ngOnDestroy() {
  }
}
