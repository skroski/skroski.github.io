import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private router: Router ){}

  ids: number[] = [];
  lastId = 0;
  label: string = '';
  title =  'Aula Pratica 15';

  // tslint:disable-next-line: typedef
  delete(id: number){
    this.ids.splice(this.ids.indexOf(id), 1);
  }

  add(){
    this.lastId++;
    this.ids.push(this.lastId);
  }
  // tslint:disable-next-line: typedef
  goToPage2(){

    this.router.navigate(['todo-list', '3']);


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
