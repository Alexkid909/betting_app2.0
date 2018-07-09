import { Component, OnInit } from '@angular/core';
import {SlipBet} from '../classes/slip-bet';
import {BettingService} from '../betting.service';
import {PlacedBet} from '../classes/placed-bets';
import {AlertService} from 'ngx-alerts';

@Component({
  selector: 'app-slip',
  templateUrl: './slip.component.html',
  styleUrls: ['./slip.component.scss']
})
export class SlipComponent implements OnInit {

  slipBets: Array<SlipBet>;

  constructor(
      private bettingService: BettingService,
      private alertService: AlertService
  ) { }

  placeBets() {
    this.bettingService.placeSlipBets().subscribe((placedBets: Array<PlacedBet>) => {
      this.alertService.success('Your bets have been placed');
    });
  }

  ngOnInit() {
    this.bettingService.slipBetsSubject.subscribe((slipBets: Array<SlipBet>) => {
      this.slipBets = slipBets;
    });

  }

}
