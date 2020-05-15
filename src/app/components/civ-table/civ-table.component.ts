import { Component } from '@angular/core';
import { civilizations } from 'src/app/data/civilizations';

@Component({
  selector: 'app-civ-table',
  templateUrl: './civ-table.component.html',
  styleUrls: ['./civ-table.component.scss']
})
export class CivTableComponent {
  public civilizations = civilizations;


}
