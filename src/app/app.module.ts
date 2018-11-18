import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StatusIndicatorBarComponent } from './dashboard/status-indicator-bar/status-indicator-bar.component';
import { CoffeeService } from './services/coffee.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    StatusIndicatorBarComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
  ],
  providers: [ CoffeeService ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
