import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
    BookDetailsComponent,
    BooksComponent,
} from './components';

const routes: Routes = [
    {
        path: '',
        component: BooksComponent,
        pathMatch: 'full'
    },
    {
        path: ':id/details',
        component: BookDetailsComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BooksRoutingModule {
}
