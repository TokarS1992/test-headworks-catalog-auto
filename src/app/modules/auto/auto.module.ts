import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import * as AutosComponents from './index';

@NgModule({
    imports: [
        CommonModule,
        MaterialModule,
        AngularFontAwesomeModule
    ],
    declarations: [
        AutosComponents.AutoItemComponent,
        AutosComponents.AutoLeftBarComponent,
        AutosComponents.AutoIndexComponent,
        AutosComponents.AutoViewSingleComponent
    ]
})
export class AutoModule { }
