import {
  Component,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Book } from '../book';
import { BookDataService } from '../book-data.service';

@Component({
  selector: 'book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
})
export class BookListComponent implements OnInit, OnChanges, OnDestroy {
  constructor(private bookDataService: BookDataService) {
    console.log('BookListComponent.constructor()');
  }

  ngOnInit() {
    console.log('BookListComponent.ngOnInit()');
    // this.books = this.bookDataService.getBooks();

    this.bookDataService.getBooks().subscribe((books) => {
      this.books = books;
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('BookListComponent.ngOnChanges()', changes);
  }

  ngOnDestroy(): void {
    console.log('BookListComponent.ngOnDestroy()');
  }

  storeUpVote(isbn: string) {
    this.changeRating(isbn, 0.1);
  }
  storeDownVote(isbn: string) {
    this.changeRating(isbn, -0.1);
  }

  changeRating(isbn: string, delta: number) {
    const book = this.books.find((book) => book.isbn === isbn);
    if (book) {
      book.rating += delta;
      book.rating = +book.rating.toFixed(2);
      book.rating = Math.max(0, book.rating);
      book.rating = Math.min(5, book.rating);
    }
  }

  coverIsVisible = true;

  books: Book[] = [];

  breite = 100 * Math.random();
  filterValue = '';

  toggleCover() {
    this.coverIsVisible = !this.coverIsVisible;
  }

  getBuchId(_index: number, book: any) {
    return book.isbn;
  }

  deleteBook(isbn: string) {
    this.bookDataService.deleteBook(isbn).subscribe(() => {
      console.log('Erledigt');
      this.ngOnInit();
    });
  }
}
