import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class EventsService {

  slipStatus: boolean;
  slipStatusSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  loadingStatus: boolean;
  loadingStatusSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() { }

  toggleSlipStatus() {
   this.slipStatus = !this.slipStatus;
   this.slipStatusSubject.next(this.slipStatus);
  }

  setLoadingStatus(status: boolean) {
    this.loadingStatus = status;
    this.loadingStatusSubject.next(this.loadingStatus);
  }


}
