import { Component, OnInit } from '@angular/core';
import { AutoService } from '../../../services/auto.service';
import { Car } from '../../../interfaces/car';

@Component({
    selector: 'app-auto-index',
    templateUrl: './auto-index.component.html',
    styleUrls: ['./auto-index.component.scss']
})
export class AutoIndexComponent implements OnInit {

    constructor(
        private autoService: AutoService
    ) { }

    ngOnInit() {
    }

}
