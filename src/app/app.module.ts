import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {BettingModule} from './betting/betting.module';
import {AppRoutingModule} from './app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {EventsService} from './events.service';
import {BettingService} from './betting/betting.service';
import {ToastrModule} from 'ngx-toastr';
import {NgSpinKitModule} from 'ng-spin-kit';


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
      ToastrModule.forRoot({
          timeOut: 3000,
          positionClass: 'toast-bottom-full-width',
          progressBar: true,
          progressAnimation: 'increasing'
      }),
      NgSpinKitModule
  ],
  providers: [
      EventsService,
      BettingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
