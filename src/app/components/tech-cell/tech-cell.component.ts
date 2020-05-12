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

  public alreadySelected: boolean = false;

  constructor(private techService: TechService) { }

  public buttonPressed(): void {
    if (this.alreadySelected) {
      this.techService.remove(this.technology)
      this.alreadySelected = false;
    } else {
      this.techService.add(this.technology);
      this.alreadySelected = true;
    }
  }

  ngOnInit(): void {
  }

}
