import { Injectable } from '@angular/core';
import { Book } from './book';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BookDataService {
  constructor(private http: HttpClient) {
    //
  }

  private SERVER_URL = environment.SERVER_URL;

  deleteBook(isbn: string) {
    return this.http.delete(`${this.SERVER_URL}/${isbn}`);
  }

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.SERVER_URL);
  }
}
