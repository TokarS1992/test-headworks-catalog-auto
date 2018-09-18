import { Component, OnInit } from '@angular/core';
import { Router, ActivationEnd, Event } from '@angular/router';
import { AutoService } from './services/auto.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
    nameView: string;

    constructor(
        private router: Router,
        private autosService: AutoService
    ) {
        this.router.events.subscribe((event: Event) => {
            if ( event instanceof ActivationEnd) {
                this.nameView = event.snapshot.data.nameView;
            }
        });
    }

    ngOnInit() {
        this.autosService.getAutos().subscribe(data => {
            console.log(data);
        });
    }
}
