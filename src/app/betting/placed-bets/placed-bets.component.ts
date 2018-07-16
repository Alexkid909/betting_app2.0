import { Component, OnInit } from '@angular/core';
import {BettingService} from '../betting.service';
import {PlacedBet} from '../classes/placed-bets';
import {EventsService} from '../../events.service';

@Component({
  selector: 'app-placed-bets',
  templateUrl: './placed-bets.component.html',
  styleUrls: [
      './placed-bets.component.scss',
      '../styles/style.scss'
  ]
})
export class PlacedBetsComponent implements OnInit {

  placedBets: Array<PlacedBet> = [];

  constructor(private bettingService: BettingService,
              private eventsService: EventsService) {

  }

  ngOnInit() {
    this.eventsService.setLoadingStatus(true);
    this.bettingService.placedBetsSubject.subscribe((placedBets: Array<PlacedBet>) => {
      this.placedBets = placedBets;
      this.eventsService.setLoadingStatus(false);
    });
  }

}
