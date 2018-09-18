import { Component, OnInit } from '@angular/core';
import { AutoService } from '../../../services/auto.service';

@Component({
    selector: 'app-auto-view-single',
    templateUrl: './auto-view-single.component.html',
    styleUrls: ['./auto-view-single.component.scss']
})
export class AutoViewSingleComponent implements OnInit {

    constructor(
        private autoService: AutoService
    ) { }

    ngOnInit() {
    }

}
