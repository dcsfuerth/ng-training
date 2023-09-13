import { Component } from '@angular/core';

@Component({
  selector: 'book-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
})
export class CalculatorComponent {
  x = 0;
  y = 0;
  result = 0;

  add() {
    this.result = +this.x + +this.y;
  }

  subst() {
    this.result = +this.x - +this.y;
  }
  clear() {
    this.x = 0;
    this.y = 0;
    this.result = 0;
  }
}
