import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BookListComponent } from './books/book-list/book-list.component';
import { FormsModule } from '@angular/forms';
import { CalculatorComponent } from './shared/calculator/calculator.component';

import localeDe from '@angular/common/locales/de';
import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import { BookFilterPipe } from './books/book-filter.pipe';
import { RatingComponent } from './shared/rating/rating.component';
import { HttpClientModule } from '@angular/common/http';

registerLocaleData(localeDe);

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    CalculatorComponent,
    BookFilterPipe,
    RatingComponent,
  ],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [{ provide: LOCALE_ID, useValue: 'de' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
