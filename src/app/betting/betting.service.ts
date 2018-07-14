import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';
import {Bet} from './classes/bet';
import {Observable} from 'rxjs/Observable';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {SlipBet} from './classes/slip-bet';
import { forkJoin } from 'rxjs/observable/forkJoin';
import {PlacedBet} from './classes/placed-bets';


@Injectable()
export class BettingService {


  api = 'https://rxtechnicaltest.herokuapp.com/';
  slipBets: Array<SlipBet> = [];
  slipBetsSubject: BehaviorSubject<SlipBet[]> = new BehaviorSubject(<SlipBet[]> this.slipBets);
  placedBets: Array<PlacedBet> = JSON.parse(localStorage.getItem('placedBets'));
  placedBetsSubject: BehaviorSubject<PlacedBet[]>  = new BehaviorSubject(<PlacedBet[]> this.placedBets);

  constructor(private http: HttpClient) {
      this.getBets();
  }

  getBets() {
    const path = `markets`;
    return this.http.get(`${this.api}${path}`).map((response: Array<Bet> ) => {
      return response;
    });
  }

  addBetToSlip(bet: Bet) {
    const newSlipBet = new SlipBet(bet);
    this.slipBets.push(newSlipBet);
    this.emitSlipBets();
    return new Observable<string>(observer => {
      observer.next('Your bet has been added to your slip');
      observer.complete();
    });
  }
  emitSlipBets() {
    console.log(this.slipBets.length);
    this.slipBetsSubject.next(this.slipBets);
  }

  emitPlacedBets() {
      this.placedBetsSubject.next(this.placedBets);
  }

  placeSlipBets() {
    const path = 'bets';
    const postCalls = [];
    this.slipBets.forEach((slipBet: SlipBet) => {
        const requestBody = {
          bet_id: slipBet.bet_id,
          stake: slipBet.stake
        };
        postCalls.push(this.http.post(`${this.api}${path}`, requestBody));
    });
    const responses = forkJoin(postCalls);
    responses.subscribe((placedBets: Array<PlacedBet>) => {
      this.updatePlacedBets(placedBets);
      setTimeout(() => this.slipBets = [], 500);
      this.emitSlipBets();
      this.emitPlacedBets();
    });
    return responses;
  }

  updatePlacedBets(newlyPlacedBets: Array<PlacedBet>) {
    this.getPlacedBets().subscribe((placedBets: Array<PlacedBet>) => {
        this.placedBets = placedBets.concat(newlyPlacedBets);
        localStorage.setItem('placedBets', JSON.stringify(this.placedBets));
        this.emitPlacedBets();
    });
  }

  getPlacedBets() {
    this.placedBets = JSON.parse(localStorage.getItem('placedBets')) || [];
    return new Observable <PlacedBet[]>(observer => {
        observer.next(this.placedBets);
        observer.complete();
      });
  }
}
