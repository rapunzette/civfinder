import { Component, OnInit, Input } from '@angular/core';
import { Technology } from 'src/app/models/technology.model';
import { TechService } from 'src/app/tech.service';

@Component({
  selector: 'app-tech-cell',
  templateUrl: './tech-cell.component.html',
  styleUrls: ['./tech-cell.component.scss']
})
export class TechCellComponent implements OnInit {

  @Input() public technology: Technology;

  constructor(public techService: TechService) { }

  public buttonPressed(): void {
    this.techService.toggle(this.technology)
  }

  ngOnInit(): void {
  }

}
