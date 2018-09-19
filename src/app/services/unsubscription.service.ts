import { Injectable } from '@angular/core';
import { Subscription } from 'rxjs';

interface ISubscriptionService {
    unsubscribeFromAllObservables(subscriptions: Array<Subscription>): void;
}

@Injectable({
    providedIn: 'root'
})
export class UnsubscriptionService implements ISubscriptionService {

    constructor() { }

    public unsubscribeFromAllObservables(subscriptions: Array<Subscription>): void {
        for (const subscription of subscriptions) {
            subscription.unsubscribe();
        }
    }
}
