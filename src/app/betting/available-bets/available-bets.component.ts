import { Component, OnInit } from '@angular/core';
import {Bet} from '../classes/bet';
import {BettingService} from '../betting.service';

@Component({
  selector: 'app-available-bets',
  templateUrl: './available-bets.component.html',
  styleUrls: ['./available-bets.component.scss']
})
export class AvailableBetsComponent implements OnInit {

  events: Array<any>;

  constructor(private bettingService: BettingService) { }

  getEventBets() {
      this.bettingService.getBets()
          .map(response => {
            const eventsObj = {};
            response.forEach(bet => {
              eventsObj[bet.event] ?  eventsObj[bet.event]['bets'].push(bet) : eventsObj[bet.event] = {bets: [bet]};
            });
            const events = Object.keys(eventsObj).map(key => {
              return {
                  name: key,
                  bets: eventsObj[key].bets
              };
            });
            return events;
          })
          .subscribe(response => this.events = response);
  }

    addBetToSlip(bet: Bet) {
      this.bettingService
          .addBetToSlip(bet)
          .subscribe(response => {
            console.log(response);
      });
    }


  ngOnInit() {
    this.getEventBets();
  }

}
