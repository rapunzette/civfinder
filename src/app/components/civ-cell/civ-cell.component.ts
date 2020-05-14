import { Component, OnInit, Input } from '@angular/core';
import { Civilization } from 'src/app/models/civilization.model';

@Component({
  selector: 'app-civ-cell',
  templateUrl: './civ-cell.component.html',
  styleUrls: ['./civ-cell.component.scss']
})
export class CivCellComponent implements OnInit {

  @Input() public civ: Civilization;

  constructor() { }

  ngOnInit(): void {
  }

}
