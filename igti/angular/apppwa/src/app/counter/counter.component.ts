import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent {

titulo = 'Event Binding e Property Binding';
valor = 0;
// tslint:disable-next-line: typedef
increment(){
  this.valor++;
}
}
