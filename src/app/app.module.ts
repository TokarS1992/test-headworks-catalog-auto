import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './modules/material/material.module';
import { AutoModule } from './modules/auto/auto.module';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { SlugifyModule } from './modules/slugify/slugify.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { IndexComponent } from './components/index/index.component';
import { InMemoryDataService } from './services/in-memory-data.service';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        IndexComponent
    ],
    imports: [
        SlugifyModule,
        AngularFontAwesomeModule,
        AutoModule,
        MaterialModule,
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService)
    ],
    providers: [],
    bootstrap: [ AppComponent ],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
