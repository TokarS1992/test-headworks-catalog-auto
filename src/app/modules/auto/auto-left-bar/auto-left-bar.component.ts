import { Component, OnInit, Input } from '@angular/core';
import { autoParams } from '../../../services/in-memory-data.service';

// interface IAutoParams {
//     [index: any]: string[];
// }

@Component({
    selector: 'app-auto-left-bar',
    templateUrl: './auto-left-bar.component.html',
    styleUrls: ['./auto-left-bar.component.scss']
})
export class AutoLeftBarComponent implements OnInit {
    @Input() private filterParams: object = {};
    private params: object = autoParams;

    constructor() { }

    ngOnInit() {}

}
