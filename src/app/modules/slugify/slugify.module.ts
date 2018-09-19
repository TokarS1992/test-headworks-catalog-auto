import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlugifyPipe } from '../../shared/slugify.pipe';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        SlugifyPipe
    ],
    exports: [ SlugifyPipe ]
})
export class SlugifyModule { }
