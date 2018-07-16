import { Component, OnInit } from '@angular/core';
import {EventsService} from '../../events.service';

@Component({
  selector: 'app-betting',
  templateUrl: './betting.component.html',
  styleUrls: [
      './betting.component.scss',
      '../styles/style.scss'
  ]
})
export class BettingComponent implements OnInit {

  slipStatus: boolean;

  constructor(private eventsService: EventsService) { }

  ngOnInit() {
      this.eventsService.slipStatusSubject.subscribe((status: boolean) => {
          this.slipStatus = status;
      });
  }

}
