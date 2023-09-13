import { Injectable } from '@angular/core';
import { Book } from './book';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BookDataService {
  constructor(private http: HttpClient) {
    //
  }

  deleteBook(isbn: string) {
    return this.http.delete(`http://localhost:3000/books/${isbn}`);
  }

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>('http://localhost:3000/books');
  }

  getBooksOld(): Book[] {
    return [
      {
        isbn: '978-1-891830-77-8',
        title: 'The Lord of the TS 2',
        coverUrl:
          'https://m.media-amazon.com/images/I/71Wv+d6oP6L._AC_UY218_.jpg',
        price: 9,
        rating: 2.3,
      },
      {
        isbn: '978-1-891830-77-9',
        title: 'The Lord of the JS',
        coverUrl:
          'https://m.media-amazon.com/images/I/71uSIJwhnmL._AC_UY218_.jpg',
        price: 19,
        rating: 2.9,
      },
    ];
  }
}
