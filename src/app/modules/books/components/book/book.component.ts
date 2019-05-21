import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Book } from '../../../../models';

@Component({
    selector: 'app-book',
    templateUrl: './book.component.html',
    styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {
    @Input() book: Book;
    @Input() authors: string[];
    @Input() showAuthors: boolean;
    @Output() toggleAuthors: EventEmitter<void> = new EventEmitter();
    date: Date;

    constructor() {
    }

    ngOnInit() {
        this.date = new Date(this.book.PublishDate);
    }

    emitToggle(): void {
        this.toggleAuthors.emit();
    }

}
