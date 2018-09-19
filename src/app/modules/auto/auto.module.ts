import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { MaterialModule } from '../material/material.module';
import { PipeModule } from '../pipe/pipe.module';
import { SlugifyPipe } from '../../shared/slugify.pipe';
import { FilterPipe } from '../../shared/filter.pipe';

import * as AutosComponents from './index';

@NgModule({
    imports: [
        FormsModule,
        ReactiveFormsModule,
        PipeModule,
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
    providers: [ SlugifyPipe, FilterPipe ]
})
export class AutoModule { }
