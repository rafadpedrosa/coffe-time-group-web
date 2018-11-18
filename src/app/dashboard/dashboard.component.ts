import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { CoffeeService } from '../services/coffee.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.scss' ]
})
export class DashboardComponent implements OnInit, OnDestroy {
  coffeeLeft = 100;

  private coffeeLeftSubscription: Subscription;

  constructor(private coffeeService: CoffeeService) {
  }

  ngOnInit() {
    this.coffeeLeftSubscription = this.coffeeService.coffeeLeftSubject
    .subscribe(({ coffeeLeft }) => this.coffeeLeft = coffeeLeft);
  }

  ngOnDestroy() {
    this.coffeeLeftSubscription.unsubscribe();
  }
}
