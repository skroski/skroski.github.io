import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-counterchange',
  templateUrl: './counterchange.component.html',
  styleUrls: ['./counterchange.component.scss']
})
export class CounterchangeComponent implements OnInit, OnChanges {

  @Input() label: string;
  @Input() max: number;
  counter: number = 0;
  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges' + JSON.stringify(changes));
  }

  ngOnInit(): void {

  }

  increment(){
    this.counter++;
  }

}
