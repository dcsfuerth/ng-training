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
import { Router, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';

registerLocaleData(localeDe);

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    CalculatorComponent,
    BookFilterPipe,
    RatingComponent,
    WelcomeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: WelcomeComponent, pathMatch: 'full' },
      { path: 'books', component: BookListComponent },
    ]),
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'de' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
