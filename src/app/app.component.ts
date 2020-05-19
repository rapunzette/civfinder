import { Component } from '@angular/core';
import { SelectedTechService } from './services/selected-tech.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public techService: SelectedTechService) { }


}
