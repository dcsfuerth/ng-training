import {
  Component,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Book } from '../book';
import { BookDataService } from '../book-data.service';
import { Subject, filter, takeUntil, timer } from 'rxjs';

@Component({
  selector: 'book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
})
export class BookListComponent implements OnInit, OnChanges, OnDestroy {
  private destroy$ = new Subject();

  books$: any;

  constructor(private bookDataService: BookDataService) {
    console.log('BookListComponent.constructor()');
  }

  ngOnInitAlt() {
    console.log('BookListComponent.ngOnInit()');
    // this.books = this.bookDataService.getBooks();

    this.bookDataService.getBooks().subscribe((books) => {
      this.books = books;
    });
  }

  async ngOnInit() {
    console.log('BookListComponent.ngOnInit()');

    timer(0, 500).pipe(takeUntil(this.destroy$)).subscribe(console.log);

    const obs = timer(0, 1000).pipe(takeUntil(this.destroy$));
    const obs2 = obs.pipe(filter((x) => x % 2 === 0));
    const wat = obs2.subscribe((x) => console.log('bruder', x));

    this.books$ = this.bookDataService.getBooks();
    this.books = await this.bookDataService.getBooksAsPromise();
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('BookListComponent.ngOnChanges()', changes);
  }

  ngOnDestroy(): void {
    console.log('BookListComponent.ngOnDestroy()');
    this.destroy$.next('bumm');
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
