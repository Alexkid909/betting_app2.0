import {Component, DoCheck, OnInit, ViewChild} from '@angular/core';
import {EventsService} from './events.service';
import {BettingService} from './betting/betting.service';
import {SlipBet} from './betting/classes/slip-bet';
import {ToastContainerDirective, ToastrService} from 'ngx-toastr';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  slipBetCount: number;
  loading: boolean;
  menuStatus: boolean;
  @ViewChild(ToastContainerDirective) toastContainer: ToastContainerDirective;
  currentRoute: string;

  constructor(
      private eventsService: EventsService,
      private bettingService: BettingService,
      private toastrService: ToastrService,
      private router: Router
    ) {
      this.router.events.subscribe((event) => {
          (event instanceof NavigationEnd) && (this.currentRoute = event.urlAfterRedirects);
      });
    }
    toggleSlip() {
      this.slipBetCount < 1 ?
          this.toastrService.warning('Your slip has no bets, please add some') :
          this.eventsService.toggleSlipStatus();
    }

    ngOnInit() {
        this.toastrService.overlayContainer = this.toastContainer;
        this.bettingService.slipBetsSubject.subscribe((slipBets: Array<SlipBet>) => {
            this.slipBetCount = slipBets.length;
        });
        this.eventsService.loadingStatusSubject.subscribe((loadingStatus: boolean) => {
            this.loading = loadingStatus;
        });
        this.eventsService.menuStatusSubject.subscribe((menuStatus: boolean) => {
            this.menuStatus = menuStatus;
        });
        this.eventsService.setLoadingStatus(true);
    }
}

