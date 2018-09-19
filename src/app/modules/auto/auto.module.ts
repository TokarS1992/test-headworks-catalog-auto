import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { SlugifyModule } from '../slugify/slugify.module';
import { SlugifyPipe } from '../../shared/slugify.pipe';

import * as AutosComponents from './index';

@NgModule({
    imports: [
        SlugifyModule,
        CommonModule,
        MaterialModule,
        AngularFontAwesomeModule
    ],
    declarations: [
        AutosComponents.AutoItemComponent,
        AutosComponents.AutoLeftBarComponent,
        AutosComponents.AutoIndexComponent,
        AutosComponents.AutoViewSingleComponent
    ],
    providers: [ SlugifyPipe ]
})
export class AutoModule { }
