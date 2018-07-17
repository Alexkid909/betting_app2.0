import {Component, Input, OnInit} from '@angular/core';
import {Bet} from '../classes/bet';
import {EventsService} from '../../events.service';

@Component({
  selector: 'app-odds',
  templateUrl: './odds.component.html',
  styleUrls: ['./odds.component.scss']
})
export class OddsComponent implements OnInit {

  @Input() bet: Bet;
  decimalOddsStatus: boolean;

  constructor(private eventsService: EventsService) { }

  ngOnInit() {
    this.eventsService.decimalOdsStatusSubject.subscribe((decimalOddsStatus: boolean) => this.decimalOddsStatus = decimalOddsStatus);
  }

}
