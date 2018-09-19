import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { AutoService } from '../../../services/auto.service';
import { UnsubscriptionService } from '../../../services/unsubscription.service';
import { Car } from '../../../interfaces/car';

interface ISlug {
    slugAuto?: string;
}

interface ISingleAuto {
    [index: string]: any;
}

@Component({
    selector: 'app-auto-view-single',
    templateUrl: './auto-view-single.component.html',
    styleUrls: ['./auto-view-single.component.scss']
})
export class AutoViewSingleComponent implements OnInit, OnDestroy {
    private subscriptions: Subscription[] = [];
    private pending = true;
    private currentAuto: ISingleAuto = {};
    private slugInfo: ISlug;

    constructor(
        private autoService: AutoService,
        private unsubscriptionService: UnsubscriptionService,
        private activatedRoute: ActivatedRoute,
        private location: Location
    ) { }

    ngOnInit() {
        const subscribeActiveRoute = this.activatedRoute.params.subscribe((data: ISlug) => {
            this.slugInfo = data;
        });

        this.subscriptions.push(
            this.autoService.getAutoBySlug(this.slugInfo.slugAuto.replace(/-/gi, ' ')).subscribe((auto: Car[]|Car|any[]) => {
                this.pending = false;
                this.currentAuto = auto[0];
            })
        );

        this.subscriptions.push(subscribeActiveRoute);
    }

    ngOnDestroy() {
        this.unsubscriptionService.unsubscribeFromAllObservables(this.subscriptions);
    }

    comebackPage() {
        this.location.back();
    }

}
