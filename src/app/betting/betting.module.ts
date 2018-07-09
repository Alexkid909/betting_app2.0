import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AvailableBetsComponent } from './available-bets/available-bets.component';
import { BettingService } from './betting.service';
import { HttpClientModule } from '@angular/common/http';
import { SlipComponent } from './slip/slip.component';
import { FormsModule } from '@angular/forms';
import { PlacedBetsComponent } from './placed-bets/placed-bets.component';
import { BettingComponent } from './betting/betting.component';

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
      BettingComponent
  ],
  providers: [
    BettingService
  ],
  exports: [
      AvailableBetsComponent,
      SlipComponent
  ]
})
export class BettingModule { }
