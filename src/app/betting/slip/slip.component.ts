import { Component, OnInit } from '@angular/core';
import {SlipBet} from '../classes/slip-bet';
import {BettingService} from '../betting.service';

@Component({
  selector: 'app-slip',
  templateUrl: './slip.component.html',
  styleUrls: ['./slip.component.scss']
})
export class SlipComponent implements OnInit {

  slipBets: Array<SlipBet>;

  constructor(private bettingService: BettingService) { }

  ngOnInit() {
    this.bettingService.slipBetsSubject.subscribe((slipBets: Array<SlipBet>) => {
      this.slipBets = slipBets;
    });
  }

}
