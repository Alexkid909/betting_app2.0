import { Component, OnInit } from '@angular/core';
import {Bet} from '../classes/bet';
import {BettingService} from '../betting.service';

@Component({
  selector: 'app-bets',
  templateUrl: './bets.component.html',
  styleUrls: ['./bets.component.scss']
})
export class BetsComponent implements OnInit {

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
          .subscribe(response => {
            console.log(response);
            this.events = response;
          });
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
