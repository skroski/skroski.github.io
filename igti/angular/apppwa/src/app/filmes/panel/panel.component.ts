import { Component, Input, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {

  expanded = true;
  @Input() title: string;
  constructor() { }

  ngOnInit(): void {
  }

  expand(){
    this.expanded = true;
  }
  contract(){
    this.expanded = false;
  }

}
