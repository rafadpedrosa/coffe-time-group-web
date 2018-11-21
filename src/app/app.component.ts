import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MessageService } from './services/message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent implements OnInit {
  coffeHistory$: Observable<any>;
  message;

  constructor(private db: AngularFirestore, private messagingService: MessageService) {
  }

  ngOnInit() {
    this.getCoffeHistory();
    this.messagingService.requestPermission('all');
    this.messagingService.receiveMessage();
    this.message = this.messagingService.currentMessage;
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
