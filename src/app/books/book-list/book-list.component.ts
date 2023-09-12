import { Component } from '@angular/core';

@Component({
  selector: 'book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
})
export class BookListComponent {
  public books = [
    {
      isbn: '978-1-891830-77-8',
      title: 'The Lord of the TS',
    },
    {
      isbn: '978-1-891830-77-9',
      title: 'The Lord of the JS',
    },
  ];

  // books: { isbn: string; title: string }[] = [];

  getBuchId(_index: number, book: any) {
    return book.isbn;
  }
}
