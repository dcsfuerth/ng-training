import { ResolveFn } from '@angular/router';
import { Observable } from 'rxjs';
import { Book } from './book';
import { BookDataService } from './book-data.service';
import { inject } from '@angular/core';

export const booksResolver: ResolveFn<Observable<Book[]>> = (route, state) => {
  return inject(BookDataService).getBooks();
};
