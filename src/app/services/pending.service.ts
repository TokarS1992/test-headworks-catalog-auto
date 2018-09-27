import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class PendingService {
    private pending = true;
    constructor() { }

    public setState(status) {
        this.pending = status;
    }

    public getStatus() {
        return this.pending;
    }
}
