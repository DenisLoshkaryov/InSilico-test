import { Component, EventEmitter, OnInit } from '@angular/core';

import { Author, Book } from '../../../../models';
import { HttpRequestsService } from '../../../../services';

@Component({
    selector: 'app-books',
    templateUrl: './books.component.html',
    styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
    books: Book[];
    authors: Author[];
    showAuthors: boolean = false;
    booksEmitter: EventEmitter<Book[]> = new EventEmitter();

    constructor(private http: HttpRequestsService) {
    }

    ngOnInit() {
        this.http.getBooks()
            .subscribe(resp => {
                this.books = resp;
                this.booksEmitter.emit(this.books);
            });
        this.http.getAuthors()
            .subscribe(resp => {
                this.authors = resp;
            });
    }

    getBookAuthors(bookId: string): string[] {
        return (this.books && this.authors)
            ?
            this.authors.filter(item => item.IDBook === bookId).map(item => `${item.FirstName} ${item.LastName}`)
            :
            [];
    }

    toggleAuthors(): void {
        this.showAuthors = !this.showAuthors;
    }

}
