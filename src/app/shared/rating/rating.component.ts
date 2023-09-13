import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'book-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css'],
})
export class RatingComponent implements OnChanges {
  @Input()
  stars = 0;

  @Input()
  id = '-';

  @Output()
  upVote = new EventEmitter<string>();

  @Output()
  downVote = new EventEmitter<string>();

  up() {
    console.log('up', this.id);
    this.upVote.emit(this.id);
  }
  down() {
    console.log('down', this.id);
    this.downVote.emit(this.id);
  }

  ngOnChanges(changes: SimpleChanges): void {
    // console.log({ changes });
  }
}
