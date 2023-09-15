import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { BookListComponent } from './book-list/book-list.component';

import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';
import { WelcomeComponent } from '../welcome/welcome.component';
import { BookFilterPipe } from './book-filter.pipe';
import { bookGuard } from './book.guard';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  { path: 'books', component: BookListComponent, canActivate: [bookGuard] },
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
