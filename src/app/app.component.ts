import { Component, OnInit, OnDestroy } from '@angular/core';
import { Technology } from './models/technology.model';
import { AngularFirestore } from '@angular/fire/firestore';
import { Subscription } from 'rxjs';
import { Civilization } from './models/civilization.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'civfinder';
  techs: Technology[];
  selectedTechs: string[] = [];
  civs: Civilization[];
  correspondingCivs: Civilization[];
  subs = new Subscription();

  public onChange(tech: Technology, checked: boolean): void {

    if (checked) {
      this.selectedTechs.push(tech.name);

    } else {
      let i: number = this.selectedTechs.indexOf(tech.name)
      this.selectedTechs.splice(i, 1);
    }

    this.updateCorrespondingCivs();
  }

  private updateCorrespondingCivs(): void {

    this.correspondingCivs = this.civs.filter(civ => {
      return this.selectedTechs.every(tech => {
        return civ.technologies.includes(tech)
      });
    })
  }

  constructor(private db: AngularFirestore) {
  }
  ngOnInit(): void {
    this.subs.add(
      this.db.collection<Technology>("technologies").valueChanges().subscribe(techs => this.techs = techs)
    )

    this.subs.add(
      this.db.collection<Civilization>("civilizations").valueChanges().subscribe(civs => {
        this.civs = civs;
        this.correspondingCivs = civs.filter(civ => {
          return this.selectedTechs.every(tech => {
            return civ.technologies.includes(tech)
          });
        })
      })
    )

  }
  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
