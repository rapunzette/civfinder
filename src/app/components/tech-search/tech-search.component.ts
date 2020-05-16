import { Component, OnInit } from '@angular/core';
import { Subject, Observable, of } from 'rxjs';
import { filter, switchMap } from 'rxjs/operators';
import { Technology } from 'src/app/models/technology.model';
import { technologies } from 'src/app/data/technologies';

@Component({
  selector: 'app-tech-search',
  templateUrl: './tech-search.component.html',
  styleUrls: ['./tech-search.component.scss']
})
export class TechSearchComponent implements OnInit {
  /**
   * The technologies that correspond to the given search term
   */
  public results: Observable<Technology[]>;
  /**
   * The search term given by the user
   */
  public offset = new Subject<string>();
  // Form event handler
  public onkeyup(e): void {
    this.offset.next(e.target.value.toLowerCase())
  }

  constructor() { }

  private search(): Observable<Technology[]> {

    return this.offset.pipe(
      filter(val => !!val), // filter empty strings
      switchMap(offset => {
        let filteredTechs: Technology[] = technologies.filter(tech => {
          return tech.name.includes(offset);
        });
        return of(filteredTechs.slice(0, 5)); // only 5 results at most

      }),
    )

  }

  ngOnInit(): void {
    this.results = this.search();
  }

}
