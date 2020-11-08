import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DespesasService, Despesa } from '../despesas.service';

@Component({
  selector: 'app-despesas-senadores',
  templateUrl: './despesas-senadores.component.html',
  styleUrls: ['./despesas-senadores.component.scss']
})
export class DespesasSenadoresComponent implements OnInit {

  nomeSenador = '';
  despesas: Despesa[] = [];
  despesasPorTipo: { tipo: number, total: number }[] = [];

  constructor(private route: ActivatedRoute, private despesasService: DespesasService) { }



  ngOnInit(): void {
    this.route.paramMap.subscribe(paramMap => {
      // tslint:disable-next-line: radix
      const id = parseInt(paramMap.get('id'));

      this.despesasService.buscaDespesasSenador(id).subscribe(despesasSenador => {
        this.nomeSenador = despesasSenador.nomeSenador;
        this.despesas = despesasSenador.despesas;
        this.despesasPorTipo = this.calculaDespesasPorTipo(this.despesas);
      });
    });
  }

  calculaTotal(): number {
    return this.despesasPorTipo.reduce((total, item) => total + item.total, 0);
  }

 // tslint:disable-next-line: typedef
 calculaDespesasPorTipo(despesas: Despesa[]) {
    const resultado: { tipo: number, total: number }[] = [];

    for (let i = 0; i <= 7; i++) {
      const valorTotal =  despesas
      .filter(d => d.tipo === i)
      .reduce((total, despesa) => total + despesa.valor, 0);
      resultado[i - 1] = {tipo: i, total: valorTotal };
    }
    return resultado;
  }

}
