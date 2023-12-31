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
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
})
export class BookListComponent implements OnInit, OnChanges, OnDestroy {
  private destroy$ = new Subject();

  books$: any;

  /**
   * Konstruktor
   * @param bookDataService  Buchdaten-Service
   * @param activatedRoute  Aktivierter Pfad
   */
  constructor(
    private bookDataService: BookDataService,
    private activatedRoute: ActivatedRoute
  ) {
    console.log('BookListComponent.constructor()');
  }

  /**
   * Lifecycle Hook: Lädt Bücherdaten beim Start der Komponente
   */
  ngOnInit() {
    console.log('BookListComponent.ngOnInit()');

    this.activatedRoute.data.subscribe(({ books }) => {
      this.books = books;
    });
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
