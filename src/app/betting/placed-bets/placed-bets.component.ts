import { Component, OnInit } from '@angular/core';
import {BettingService} from '../betting.service';
import {PlacedBet} from '../classes/placed-bets';

@Component({
  selector: 'app-placed-bets',
  templateUrl: './placed-bets.component.html',
  styleUrls: ['./placed-bets.component.scss']
})
export class PlacedBetsComponent implements OnInit {

  placedBets: Array<PlacedBet> = [];

  constructor(private bettingService: BettingService) { }

  ngOnInit() {
    this.bettingService.placedBetsSubject.subscribe((placedBets: Array<PlacedBet>) => {
      this.placedBets = placedBets;
      console.log(placedBets);
    });
  }

}
