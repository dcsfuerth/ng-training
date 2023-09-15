import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BookListComponent } from './books/book-list/book-list.component';

import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import localeDe from '@angular/common/locales/de';
import { LOCALE_ID, isDevMode } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { BookFilterPipe } from './books/book-filter.pipe';
import { bookGuard } from './books/book.guard';
import { counterReducer } from './counter/counter.reduser';
import { WelcomeComponent } from './welcome/welcome.component';
import { SharedModule } from './shared/shared.module';

registerLocaleData(localeDe);

const routes: Routes = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'books', component: BookListComponent, canActivate: [bookGuard] },
  { path: 'book/:isbn', component: BookListComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    BookFilterPipe,
    WelcomeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes, { enableTracing: false }),
    StoreModule.forRoot({ count: counterReducer }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    SharedModule,
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'de' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
