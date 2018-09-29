import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { autoParams } from '../../../services/in-memory-data.service';
import * as _ from 'underscore';

@Component({
    selector: 'app-auto-left-bar',
    templateUrl: './auto-left-bar.component.html',
    styleUrls: ['./auto-left-bar.component.scss']
})
export class AutoLeftBarComponent implements OnInit {
    @Output() private changeFilter = new EventEmitter<any>();
    @Input() private filterParams: object = {};
    private params: object = autoParams;

    constructor() { }

    ngOnInit() {}

    get checkParamsIsNotEmpty() {
        return _.compact(_.values(this.filterParams)).length;
    }

    clearFilter() {
        this.changeFilter.emit();
    }

}
