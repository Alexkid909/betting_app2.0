import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {BettingModule} from './betting/betting.module';
import {AppRoutingModule} from './app-routing.module';
import {AlertModule} from 'ngx-alerts';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BettingModule,
      BrowserAnimationsModule,
      BrowserModule,
      AlertModule.forRoot({maxMessages: 5, timeout: 5000})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
