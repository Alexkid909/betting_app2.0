import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import 'rxjs/add/operator/map';
import {Bet} from './classes/bet';
import {Observable} from 'rxjs/Observable';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {SlipBet} from './classes/slip-bet';


@Injectable()
export class BettingService {


  api = 'https://rxtechnicaltest.herokuapp.com/';
  slipBetsSubject: BehaviorSubject<SlipBet[]> = new BehaviorSubject(<SlipBet[]> this.slipBets);
  slipBets: Array<SlipBet>;


  constructor(private http: HttpClient) {
      this.getBets();
      this.slipBets = [];
  }

  getBets() {
    const path = `markets`;
    return this.http.get(`${this.api}${path}`).map((response: Array<Bet> ) => {
      console.log(response);
      return response;
    });
  }

  addBetToSlip(bet: Bet) {
    const newSlipBet = new SlipBet(bet);
    console.log('newSlipBet', newSlipBet);
    this.slipBets.push(newSlipBet);
    this.emitSlipBets();
    return new Observable<string>(observer => {
      observer.next('Your bet has been added to your slip');
      observer.complete();
    });
  }
  emitSlipBets() {
    this.slipBetsSubject.next(this.slipBets);
  }
}
