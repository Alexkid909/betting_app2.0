import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class EventsService {

  slipStatus: boolean;
  slipStatusSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  menuStatus = true;
  menuStatusSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  loadingStatus: boolean;
  loadingStatusSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  decimalOddsStatus: boolean;
  decimalOdsStatusSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() {
      this.loadingStatus = true;
      this.loadingStatusSubject.next(this.loadingStatus);
  }

  toggleSlipStatus() {
   this.slipStatus = !this.slipStatus;
   this.slipStatusSubject.next(this.slipStatus);
  }

  setLoadingStatus(status: boolean) {
    setTimeout(() => {
        this.loadingStatus = status;
        this.loadingStatusSubject.next(this.loadingStatus);
    }, (status) ? 0 : 1000);
  }

  setDecimalOddsStatus(status: boolean) {
      this.decimalOddsStatus = status;
      this.decimalOdsStatusSubject.next(this.decimalOddsStatus);
  }
}
