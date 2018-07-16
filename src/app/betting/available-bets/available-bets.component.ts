import {ApplicationRef, Component, OnInit} from '@angular/core';
import {Bet} from '../classes/bet';
import {BettingService} from '../betting.service';
import {ToastrService} from 'ngx-toastr';
import {EventsService} from '../../events.service';

@Component({
  selector: 'app-available-bets',
  templateUrl: './available-bets.component.html',
  styleUrls: [
      './available-bets.component.scss',
      '../styles/style.scss'
  ]
})
export class AvailableBetsComponent implements OnInit {

  events: Array<any>;
  currentRoute: string;

  constructor(
      private ref: ApplicationRef,
      private bettingService: BettingService,
      private toastrService: ToastrService,
      private eventsService: EventsService
  ) {}


  getEventBets() {
      this.eventsService.setLoadingStatus(true);
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
              this.events = response;
              this.eventsService.setLoadingStatus(false);
          }, error => this.toastrService.error('Ooops, something went wrong!, Please try again.'));
  }

    addBetToSlip(bet: Bet) {
      this.bettingService
          .addBetToSlip(bet)
          .subscribe(response => {
            this.toastrService.info('Your bet has been added to your slip');
      }, error => this.toastrService.error('Ooops, something went wrong!, Please try again.'));
    }


  ngOnInit() {
    this.getEventBets();
  }

}
