import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Book } from '../../../../models';
import { ActivatedRoute } from '@angular/router';
import { HttpRequestsService } from '../../../../services';

@Component({
    selector: 'app-book-details',
    templateUrl: './book-details.component.html',
    styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {
    bookId: string;
    book: Book;

    constructor(private location: Location,
                private route: ActivatedRoute,
                private http: HttpRequestsService) {
    }

    ngOnInit() {
        this.bookId = this.route.snapshot.params.id;
        this.getBook();
    }

    getBook(): void {
        this.http.getBook(this.bookId)
            .subscribe(book => {
                this.book = book;
            });
    }

    goBack() {
        this.location.back();
    }

}
