import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  ids: number[] = [];
  lastId = 0;
  label: string = '';

  delete(id: number){
    this.ids.splice(this.ids.indexOf(id), 1);
  }

  add(){
    this.lastId++;
    this.ids.push(this.lastId);
  }

  // exibir = true;
  // x = false;
  // Toggle Button Simples
  // tslint:disable-next-line: typedef
  /* toggleShow(){
    // tslint:disable-next-line: no-unused-expression
    this.exibir = !this.exibir;
  } */
}
