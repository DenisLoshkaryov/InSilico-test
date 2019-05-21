import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import {
    BooksComponent,
    BookDetailsComponent,
    BookComponent,
    ChartComponent
} from './components';

@NgModule({
  declarations: [BooksComponent, BookComponent, ChartComponent, BookDetailsComponent],
  imports: [
    CommonModule,
    BooksRoutingModule
  ]
})
export class BooksModule { }
