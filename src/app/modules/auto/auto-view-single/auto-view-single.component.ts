import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { AutoService } from '../../../services/auto.service';
import { UnsubscriptionService } from '../../../services/unsubscription.service';
import { Car } from '../../../interfaces/car';

@Component({
    selector: 'app-auto-view-single',
    templateUrl: './auto-view-single.component.html',
    styleUrls: ['./auto-view-single.component.scss']
})
export class AutoViewSingleComponent implements OnInit, OnDestroy {
    private subscriptions: Subscription[] = [];

    constructor(
        private autoService: AutoService,
        private unsubscriptionService: UnsubscriptionService,
        private activatedRoute: ActivatedRoute
    ) { }

    ngOnInit() {
        console.log(this.activatedRoute);

        const subsAutoServ = this.autoService.getAutoBySlug().subscribe((res: Car) => {
            console.log(res);
        });

        this.subscriptions.push(subsAutoServ);
    }

    ngOnDestroy() {
        this.unsubscriptionService.unsubscribeFromAllObservables(this.subscriptions);
    }

}
