import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent {
  @Input() rating: number;

  // tslint:disable-next-line: no-output-on-prefix
  @Output() ratingChange = new EventEmitter<number>();

  // tslint:disable-next-line: typedef
  onClick(i: number){
    this.ratingChange.emit(i);
  }

}
