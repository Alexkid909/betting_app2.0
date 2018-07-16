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
import {FormsModule} from '@angular/forms';
import {Angular2FontawesomeModule} from 'angular2-fontawesome';
import {MenuComponent} from './menu/menu.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BettingModule,
      FormsModule,
      BrowserAnimationsModule,
      BrowserModule,
      ToastrModule.forRoot({
          timeOut: 3000,
          positionClass: 'toast-bottom-full-width',
          progressBar: true,
          progressAnimation: 'increasing'
      }),
      NgSpinKitModule,
      Angular2FontawesomeModule
  ],
  providers: [
      EventsService,
      BettingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
