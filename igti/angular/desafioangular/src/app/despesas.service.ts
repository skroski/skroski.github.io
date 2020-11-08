import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
const urlBase = 'http://localhost:3000';


export interface Senador {
  id: number;
  nomeSenador: string;
}

export interface Despesa {
  tipo: number;
  fornec: string;
  ano: number;
  mes: number;
  dia: number;
  valor: number;
}


export interface DespesasSenador {
  id: number;
  nomeSenador: string;
  despesas: {
    tipo: number;
    fornec: string;
    ano: number;
    mes: number;
    dia: number;
    valor: number;
  }[];
}

export const tipos = {
  1: 'Aluguel de imóveis e despesas concernentes a eles',
  2: 'Divulgação de Atividade Parlamentar',
  3: 'Aquisição de material de consumo para uso no escritório',
  4: 'Passagens Aéreas, aquáticas e terrestres nacionais',
  5: 'Contratação de consultorias, assessorias, pesquisas, trabalhos técnicos e outros serviços',
  6: 'Locomoção, hospedagem, alimentação e combustíveis',
  7: 'Serviços de Segurança Privada'
};

@Injectable({
  providedIn: 'root'
})

export class DespesasService {

  constructor( private http: HttpClient) {   }

  // tslint:disable-next-line: typedef
  buscaDespesasSenador(id: number){
    return this.http.get<DespesasSenador>(`${urlBase}/despesasSenadores/${id}`);
  }

  // tslint:disable-next-line: typedef
  buscaSenadores(){
    return this.http.get<Senador[]>(`${urlBase}/senadores`);
  }

  formataTipo(tipo: number): string {
    return tipos[tipo];
  }
}
