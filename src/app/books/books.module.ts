import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { BookListComponent } from './book-list/book-list.component';

import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { WelcomeComponent } from '../welcome/welcome.component';
import { BookFilterPipe } from './book-filter.pipe';
import { booksResolver } from './books.resolver';

const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  {
    path: 'books',
    component: BookListComponent,
    resolve: { books: booksResolver },
  },
  { path: 'book/:isbn', component: BookListComponent },
];

@NgModule({
  declarations: [BookListComponent, BookFilterPipe, WelcomeComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    SharedModule,
    RouterModule.forChild(routes),
  ],
  providers: [],
  bootstrap: [],
  exports: [BookListComponent, WelcomeComponent],
})
export class BooksModule {}
