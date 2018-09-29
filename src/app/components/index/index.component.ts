import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import * as _ from 'underscore';

import { UserService } from '../../services/user.service';
import { UnsubscriptionService } from '../../services/unsubscription.service';
import { PendingService } from '../../services/pending.service';
import { UnderscoreService } from '../../services/underscore.service';
import { IUser } from '../../interfaces/user';

@Component({
    selector: 'app-index',
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit, OnDestroy {
    private subscriptions: Subscription[] = [];
    private userInfo: IUser|object = {};
    private isUserEdit: false;
    private cities = [];
    private userInfoDamp: IUser = null;

    constructor(
      private userService: UserService,
      private unsubscribeService: UnsubscriptionService,
      private pending: PendingService,
      private _: UnderscoreService
    ) { }

    ngOnInit() {
        this.pending.setState(true);

        this.subscriptions.push(
            this.userService.getUserInfo().subscribe((userInfo: IUser) => {
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
        this.isUserEdit = false;
        this.userInfo = this.userInfoDamp;
    }

    editInfo() {
        this.pending.setState(true);

        this.subscriptions.push(
            this.userService.updateUserInfo(this.userInfo).subscribe((data: IUser) => {
                this.pending.setState(false);
                this.isUserEdit = false;
            })
        );
    }

    // loadImage(e) {
    //     this.uploadService.postPhoto().subscribe(data => {
    //         console.log(data);
    //     });
    //     console.log(e);
    // }

    ngOnDestroy() {
        this.unsubscribeService.unsubscribeFromAllObservables(this.subscriptions);
    }
}
