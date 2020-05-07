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
  civs: Civilization[];
  subs = new Subscription();

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
