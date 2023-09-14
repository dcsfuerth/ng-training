import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'book-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  umgebung = environment.PRODUCTION ? 'Produktion' : 'Entwicklung';
  title = 'books';

  constructor(private router: Router) {}

  gotoBooks() {
    this.router.navigateByUrl('/books');
  }
}
