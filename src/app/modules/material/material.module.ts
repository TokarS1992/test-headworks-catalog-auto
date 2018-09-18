import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatMenuModule } from '@angular/material/menu';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';

@NgModule({
    imports: [
      CommonModule,
      BrowserAnimationsModule
    ],
    declarations: [],
    exports: [
        MatInputModule,
        MatProgressSpinnerModule,
        MatSnackBarModule,
        MatMenuModule,
        MatFormFieldModule,
        MatButtonModule,
        MatIconModule,
        MatCheckboxModule,
        MatSidenavModule
    ]
})
export class MaterialModule { }
