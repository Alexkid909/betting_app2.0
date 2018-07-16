import {Component, Input, OnInit} from '@angular/core';
import {SlipBet} from '../classes/slip-bet';
import {BettingService} from '../betting.service';
import {PlacedBet} from '../classes/placed-bets';
import {EventsService} from '../../events.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-slip',
  templateUrl: './slip.component.html',
  styleUrls: ['./slip.component.scss']
})
export class SlipComponent implements OnInit {

  slipBets: Array<SlipBet>;

  constructor(
      private bettingService: BettingService,
      private toastr: ToastrService,
      private eventsService: EventsService
  ) { }

  placeBets() {
    this.bettingService.placeSlipBets().subscribe((placedBets: Array<PlacedBet>) => {
      this.eventsService.toggleSlipStatus();
      this.toastr.success(
          'Your bets have been placed, good luck!');
    }, error => {
        this.toastr.error('Oops, something went wrong! Please try again.');
    });
  }

  ngOnInit() {
    this.bettingService.slipBetsSubject.subscribe((slipBets: Array<SlipBet>) => {
      this.slipBets = slipBets;
    }, error => this.toastr.error('Ooops, something went wrong!, Please try again.'));
  }

}
