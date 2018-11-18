import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent implements OnInit {
  title = 'coffe-time-group-web';
  coffeHistory$: Observable<any>;

  constructor(private db: AngularFirestore) {
  }

  ngOnInit() {
    this.getCoffeHistory();
  }

  getCoffeHistory() {
    this.coffeHistory$ = this.db
    .collection('coffeHistory')
    .snapshotChanges()
    .pipe(
      map(response => response.map(doc => doc.payload.doc.data()))
    );
  }
}
