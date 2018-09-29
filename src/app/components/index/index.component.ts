import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { FormGroup , FormControl, Validators } from '@angular/forms';

import { UserService } from '../../services/user.service';
import { UnsubscriptionService } from '../../services/unsubscription.service';
import { PendingService } from '../../services/pending.service';
import { IUser } from '../../interfaces/user';
import { phoneValidator } from '../../utils/phoneValidator';

@Component({
    selector: 'app-index',
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit, OnDestroy {
    private subscriptions: Subscription[] = [];
    private cities = [];
    private userInfoDamp: IUser = null;
    private userInfoForm: FormGroup;

    constructor(
      private userService: UserService,
      private unsubscribeService: UnsubscriptionService,
      private pending: PendingService
    ) { }

    ngOnInit() {
        this.pending.setState(true);

        this.userInfoForm = new FormGroup({
            name: new FormControl('', [
                Validators.required,
                Validators.minLength(2),
                Validators.maxLength(20)
            ]),
            surname: new FormControl('', [
                Validators.required,
                Validators.minLength(2),
                Validators.maxLength(20)
            ]),
            email: new FormControl('', [
                Validators.required,
                Validators.email
            ]),
            phone: new FormControl('', [
                Validators.required,
                Validators.minLength(10),
                Validators.maxLength(13),
                phoneValidator
            ]),
            address: new FormControl('', [
                Validators.required
            ]),
            city: new FormControl(),
            avatarUrl: new FormControl()
        });

        this.userInfoForm.disable();

        this.subscriptions.push(
            this.userService.getUserInfo().subscribe((userInfo: IUser) => {
                this.userInfoDamp = userInfo;
                this.pending.setState(false);
                this.userInfoForm.patchValue(userInfo);

                for (const key in userInfo) {
                    if (!this.userInfoForm.controls[key]) this.userInfoForm.addControl(key, new FormControl(userInfo[key]));
                }

                this.userInfoForm.disable();
            })
        );

        this.subscriptions.push(
            this.userService.getCities().subscribe(data => {
                this.cities = data;
            })
        );
    }

    editInfo() {
        this.pending.setState(true);

        this.subscriptions.push(
            this.userService.updateUserInfo(this.userInfoForm.value).subscribe(() => {
                this.pending.setState(false);
                this.userInfoForm.disable();
            })
        );
    }

    ngOnDestroy() {
        this.unsubscribeService.unsubscribeFromAllObservables(this.subscriptions);
    }
}
