import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoffeeService {
  coffeeLeftSubject = new Subject();

  constructor(private db: AngularFirestore) {
    this.db.doc('coffeeStatus/ldztzXbK8IHwGKuZjg5b')
    .valueChanges()
    .subscribe(response => this.coffeeLeftSubject.next(response));
  }

  updateCoffeeStatus(coffeeStatus) {
    this.db.doc('coffeeStatus/ldztzXbK8IHwGKuZjg5b')
    .update(coffeeStatus);
  }
}
