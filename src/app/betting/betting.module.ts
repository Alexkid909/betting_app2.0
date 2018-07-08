import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BettingRoutingModule } from './betting-routing.module';
import { BetsComponent } from './bets/bets.component';
import {BettingService} from './betting.service';
import {HttpClientModule} from '@angular/common/http';
import { SlipComponent } from './slip/slip.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    BettingRoutingModule,
    HttpClientModule,
      FormsModule
  ],
  declarations: [
      BetsComponent,
      SlipComponent
  ],
  providers: [
    BettingService
  ],
  exports: [
      BetsComponent,
      SlipComponent
  ]
})
export class BettingModule { }
