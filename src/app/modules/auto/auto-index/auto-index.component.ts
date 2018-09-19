import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import {  } from 'rx';

import { AutoService } from '../../../services/auto.service';
import { UnsubscriptionService } from '../../../services/unsubscription.service';
import { Car } from '../../../interfaces/car';

@Component({
    selector: 'app-auto-index',
    templateUrl: './auto-index.component.html',
    styleUrls: ['./auto-index.component.scss']
})
export class AutoIndexComponent implements OnInit, OnDestroy {
    private subscriptions: Subscription[] = [];
    private autos: Car[] = [];
    private pending = true;
    private filterParams: object = {
        title: '',
        typeCarcase: null,
        statusCar: null,
        typeOil: null,
        transmission: null
    };

    constructor(
        private autoService: AutoService,
        private unsubscribeService: UnsubscriptionService
    ) {}

    ngOnInit() {
        localStorage.removeItem('currentAuto');

        this.subscriptions.push(
            this.autoService.getAutos().subscribe((data: Car[]) => {
                this.autos = data;
                this.pending = false;
            })
        );
    }

    ngOnDestroy() {
        this.unsubscribeService.unsubscribeFromAllObservables(this.subscriptions);
    }

}
