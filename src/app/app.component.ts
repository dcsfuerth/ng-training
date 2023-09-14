import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {
  of,
  from,
  timer,
  filter,
  map,
  Subject,
  BehaviorSubject,
  ReplaySubject,
} from 'rxjs';
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

  ngOnInit() {
    // const obs3$ = timer(0, 500); // läuft endlos
    // obs3$.subscribe((x) => console.log('obs3$', x));

    // const obs4$ = obs3$.pipe(
    //   filter((x) => x % 2 === 0), // nur gerade
    //   map((x) => x * 10) // ver-10-fachen
    // );

    // obs4$.subscribe(console.log);

    const mySubject$ = new ReplaySubject(5);
    mySubject$.next('Hallo');
    mySubject$.next('Welt :-) ');
    mySubject$.subscribe(console.log);
  }
}
