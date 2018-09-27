import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { SlugifyPipe } from '../../../shared/slugify.pipe';
import { Car } from '../../../interfaces/car';

@Component({
    selector: 'app-auto-item',
    templateUrl: './auto-item.component.html',
    styleUrls: ['./auto-item.component.scss']
})
export class AutoItemComponent implements OnInit {
    @Input() carItem: Car;

    constructor(
        private router: Router,
        private slugify: SlugifyPipe
    ) { }

    ngOnInit() {}

    navigateToSingeAuto() {
        const slug = this.slugify.transform(this.carItem.title);
        this.router.navigate([`/autos/${slug}`]);
    }
}
