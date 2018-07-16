import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AvailableBetsComponent } from './available-bets/available-bets.component';
import { BettingService } from './betting.service';
import { HttpClientModule } from '@angular/common/http';
import { SlipComponent } from './slip/slip.component';
import { FormsModule } from '@angular/forms';
import { PlacedBetsComponent } from './placed-bets/placed-bets.component';
import { BettingComponent } from './betting/betting.component';
import {EventsService} from '../events.service';
import {OddsComponent} from './odds/odds.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
  ],
  declarations: [
      AvailableBetsComponent,
      SlipComponent,
      PlacedBetsComponent,
      BettingComponent,
      OddsComponent
  ],
  providers: [
    BettingService,
    EventsService
  ],
  exports: [
      AvailableBetsComponent,
      SlipComponent,
      OddsComponent
  ]
})
export class BettingModule { }
