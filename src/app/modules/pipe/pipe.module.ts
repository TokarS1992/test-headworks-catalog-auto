import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlugifyPipe } from '../../shared/slugify.pipe';
import { FilterPipe } from '../../shared/filter.pipe';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        SlugifyPipe,
        FilterPipe
    ],
    exports: [
        SlugifyPipe,
        FilterPipe
    ]
})
export class PipeModule { }
