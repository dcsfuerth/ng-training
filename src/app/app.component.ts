import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'book-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  umgebung = environment.PRODUCTION ? 'Produktion' : 'Entwicklung';
  title = 'books';
}
