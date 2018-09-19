import { Component, OnInit, Input, Output } from '@angular/core';
import { Car } from '../../../interfaces/car';

@Component({
    selector: 'app-auto-item',
    templateUrl: './auto-item.component.html',
    styleUrls: ['./auto-item.component.scss']
})
export class AutoItemComponent implements OnInit {
    @Input() carItem: Car;

    constructor() { }

    ngOnInit() {}

}
