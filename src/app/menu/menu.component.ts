import {Component, DoCheck, OnInit} from '@angular/core';
import {EventsService} from '../events.service';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit, DoCheck {

  menuStatus: boolean;
  decimalOddsStatus: boolean;
  currentRoute: string;

  constructor(
      private activatedRoute: ActivatedRoute,
      private router: Router,
      private eventsService: EventsService
  ) {
      this.decimalOddsStatus = false;
      this.router.events.subscribe((event) => {
          (event instanceof NavigationEnd) && (this.currentRoute = event.urlAfterRedirects);
      });
  }



  ngOnInit() {
    this.eventsService.menuStatusSubject.subscribe((menuStatus: boolean) => {
      this.menuStatus = menuStatus;
    });
  }

  ngDoCheck() {
      this.eventsService.setDecimalOddsStatus(this.decimalOddsStatus);
  }
}
