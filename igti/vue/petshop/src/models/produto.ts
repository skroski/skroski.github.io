interface Produto {
  id: string;
  nome: string;
  foto: string;
  preco: number;
  desconto?: number;
  descricao: string;
}

export default Produto;