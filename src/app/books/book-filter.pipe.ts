import { Pipe, PipeTransform } from '@angular/core';
import { Book } from './book';

@Pipe({
  name: 'bookFilter',
})
export class BookFilterPipe implements PipeTransform {
  transform(books: Book[] = [], filterValue = ''): Book[] {
    if (!filterValue || !books.length) {
      return books;
    }
    const filterData = filterValue.toLowerCase();

    return books.filter(
      (book) => book.title.toLowerCase().indexOf(filterData) >= 0
    );
  }
}
