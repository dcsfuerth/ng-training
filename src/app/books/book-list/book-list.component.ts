import { Component } from '@angular/core';

@Component({
  selector: 'book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
})
export class BookListComponent {
  coverIsVisible = true;

  books = [
    {
      isbn: '978-1-891830-77-8',
      title: 'The Lord of the TS',
      coverUrl:
        'https://m.media-amazon.com/images/I/71Wv+d6oP6L._AC_UY218_.jpg',
      price: 9,
    },
    {
      isbn: '978-1-891830-77-9',
      title: 'The Lord of the JS',
      coverUrl:
        'https://m.media-amazon.com/images/I/71uSIJwhnmL._AC_UY218_.jpg',
      price: 19,
    },
  ];

  breite = 100 * Math.random();
  filterValue = '';

  toggleCover() {
    this.coverIsVisible = !this.coverIsVisible;
  }

  getBuchId(_index: number, book: any) {
    return book.isbn;
  }
}
