import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent  {

  text = 'Uma mensagem qualquer';
  n = 12050.4983;
  hoje = new Date();

  meuCep = '82410040';
  meuCpf = '02939682925';
  strings: string[] = ['gato', 'cavalo'];

  // tslint:disable-next-line: typedef
  addString(newString){
    this.strings.push(newString);
  }

}
