import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { AutoService } from '../../../services/auto.service';
import { UnsubscriptionService } from '../../../services/unsubscription.service';
import { PendingService } from '../../../services/pending.service';
import { Car } from '../../../interfaces/car';

interface IFilter {
    title: string;
    typeCarcase: string|null;
    statusCar: string|null;
    typeOil: string|null;
    transmission: string|null;
}

@Component({
    selector: 'app-auto-index',
    templateUrl: './auto-index.component.html',
    styleUrls: ['./auto-index.component.scss']
})
export class AutoIndexComponent implements OnInit, OnDestroy {
    private subscriptions: Subscription[] = [];
    private autos: Car[] = [];
    private filterParams: IFilter = {
        title: '',
        typeCarcase: null,
        statusCar: null,
        typeOil: null,
        transmission: null
    };

    constructor(
        private autoService: AutoService,
        private unsubscribeService: UnsubscriptionService,
        private pending: PendingService
    ) {}

    ngOnInit() {
        localStorage.removeItem('currentAuto');
        this.pending.setState(true);

        this.subscriptions.push(
            this.autoService.getAutos().subscribe((data: Car[]) => {
                this.autos = data;
                this.pending.setState(false);
            })
        );
    }

    handlerClearFilter() {
        this.filterParams = { title: '', typeCarcase: null, statusCar: null, typeOil: null, transmission: null };
    }

    ngOnDestroy() {
        this.unsubscribeService.unsubscribeFromAllObservables(this.subscriptions);
    }

}
