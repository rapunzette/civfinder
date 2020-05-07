import { Component, OnInit, OnDestroy } from '@angular/core';
import { Technology } from './models/technology.model';
import { AngularFirestore } from '@angular/fire/firestore';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'civfinder';
  techs: Technology[];
  sub: Subscription;

  constructor(private db: AngularFirestore) {
  }
  ngOnInit(): void {
    this.sub = this.db.collection<Technology>("Technologies").valueChanges().subscribe(techs => (this.techs = techs));
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
