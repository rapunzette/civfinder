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
  selectedTechs: Technology[] = [];
  civs: Civilization[];
  subs = new Subscription();

  public onChange(tech: Technology, checked: boolean): void {

    if (checked) {
      this.selectedTechs.push(tech);

    } else {
      let i: number = this.selectedTechs.indexOf(tech)
      this.selectedTechs.splice(i, 1);
    }

  }

  constructor(private db: AngularFirestore) {
  }
  ngOnInit(): void {
    this.subs.add(
      this.db.collection<Technology>("Technologies").valueChanges().subscribe(techs => (this.techs = techs))
    )

    this.subs.add(
      this.db.collection<Civilization>("Civilizations").valueChanges().subscribe(civs => (this.civs = civs))
    )

  }
  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
