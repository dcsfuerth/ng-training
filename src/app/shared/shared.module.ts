import { NgModule } from '@angular/core';

import { CalculatorComponent } from './calculator/calculator.component';
import { RatingComponent } from './rating/rating.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CalculatorComponent, RatingComponent],
  imports: [FormsModule],
  providers: [],
  bootstrap: [],
  exports: [CalculatorComponent, RatingComponent],
})
export class SharedModule {}
