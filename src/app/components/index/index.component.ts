import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import * as _ from 'underscore';

import { UserService } from '../../services/user.service';
import { UnsubscriptionService } from '../../services/unsubscription.service';
import { PendingService } from '../../services/pending.service';
import { UnderscoreService } from '../../services/underscore.service';
import { User } from '../../interfaces/user';

@Component({
    selector: 'app-index',
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit, OnDestroy {
    private subscriptions: Subscription[] = [];
    private userInfo: User|object = {};
    private isUserEdit: false;
    private cities = [];
    private userInfoDamp: User = null;

    constructor(
      private userService: UserService,
      private unsubscribeService: UnsubscriptionService,
      private pending: PendingService,
      private _: UnderscoreService
    ) { }

    ngOnInit() {
        this.pending.setState(true);

        this.subscriptions.push(
            this.userService.getUserInfo().subscribe((userInfo: User) => {
                this.userInfo = userInfo;
                this.userInfoDamp = _.clone(this.userInfo);
                this.pending.setState(false);
            })
        );

        this.subscriptions.push(
            this.userService.getCities().subscribe(data => {
                this.cities = data;
            })
        );
    }

    cancelHandler() {
        this.userInfo = this.userInfoDamp;
    }

    ngOnDestroy() {
        console.log(this.userInfo);
        this.unsubscribeService.unsubscribeFromAllObservables(this.subscriptions);
    }
}
