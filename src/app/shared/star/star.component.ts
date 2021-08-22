import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output
} from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {
  constructor() {}

  @Input() rating: number = 0;
  cropWidth: number = 75;

  ngOnChanges(): void {
    this.cropWidth = this.rating * (75 / 5);
  }

  @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

  onClick() {
    this.ratingClicked.emit(`The rating ${this.rating} was clicked!`);
  }
}
