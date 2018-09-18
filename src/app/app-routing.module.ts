import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './components/index/index.component';
import { AutoIndexComponent } from './modules/auto/auto-index/auto-index.component';
import { AutoViewSingleComponent } from './modules/auto/auto-view-single/auto-view-single.component';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'index'
    },
    {
        path: 'index',
        component: IndexComponent,
        data: { nameView: 'Index' }
    },
    {
        path: 'autos',
        component: AutoIndexComponent,
        data: { nameView: 'Autos-list' }
    },
    {
        path: 'autos/:slugAuto',
        component: AutoViewSingleComponent,
        data: { nameView: 'Auto-single' }
    }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }
