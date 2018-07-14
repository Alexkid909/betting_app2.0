import {Component, OnInit} from '@angular/core';
import {EventsService} from './events.service';
import {BettingService} from './betting/betting.service';
import {SlipBet} from './betting/classes/slip-bet';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {isBoolean} from 'util';
import {Toast, ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {


  title = 'app';
  slipActive: true;
  slipBetCount: number;
  currentRoute: string;
  loading: boolean;

  constructor(
      private eventsService: EventsService,
      private bettingService: BettingService,
      private activatedRoute: ActivatedRoute,
      private router: Router,
      private toastrService: ToastrService
    ) {
      this.router.events.subscribe((val) => {
          (val instanceof NavigationEnd) && (this.currentRoute = val.urlAfterRedirects);
      });
    }
  toggleSlip() {
      this.slipBetCount < 1 ?
        this.toastrService.warning('Your slip has no bets, please add some') :
        this.eventsService.toggleSlipStatus();
  }

    ngOnInit() {
        this.bettingService.slipBetsSubject.subscribe((slipBets: Array<SlipBet>) => {
            this.slipBetCount = slipBets.length;
        });
        this.eventsService.loadingStatusSubject.subscribe((loadingStatus: boolean) => {
            this.loading = loadingStatus;
        });
        this.eventsService.setLoadingStatus(true);
    }
}

