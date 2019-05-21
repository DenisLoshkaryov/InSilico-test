import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Author, Book } from '../models';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class HttpRequestsService {

    constructor(private http: HttpClient) {
    }

    getBooks(): Observable<Book[]> {
        return this.http.get<Book[]>(`${environment.apiUrl}/Books`);
    }

    getBook(id: string): Observable<Book> {
        return this.http.get<Book>(`${environment.apiUrl}/Books/${id}`);
    }

    getAuthors(): Observable<Author[]> {
        return this.http.get<Author[]>(`${environment.apiUrl}/Authors`);
    }
}
