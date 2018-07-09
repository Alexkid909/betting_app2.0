import {Bet} from './bet';
export class SlipBet extends Bet {
    constructor(bet, stake?) {
        super();
        this.bet_id = bet.bet_id;
        this.event = bet.event;
        this.name = bet.name;
        this.odds = bet.odds;
        this.stake = bet.stake || 1;
    }
    stake: number;
}
