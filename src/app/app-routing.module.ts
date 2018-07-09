import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PlacedBetsComponent} from './betting/placed-bets/placed-bets.component';
import {BettingComponent} from './betting/betting/betting.component';
import {BettingModule} from './betting/betting.module';


const routes: Routes = [
    {
        path: 'placed-bets',
        component: PlacedBetsComponent
    },
    {
        path: '',
        component: BettingComponent
    },
    {
        path: '*',
        redirectTo: ''
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes),
        BettingModule
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
