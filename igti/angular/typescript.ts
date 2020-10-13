function soma(a: number,b: number): number {
    return a + b;
}
// soma('olá', 4); Erro de tipo
soma(4,3)
// aceita qualquer tipo
function imprime(x:boolean[]) {
    return x;
}
// Tipo Any
function soma2(a, b) {
    return a + b;
    
}
soma2(3,'kdjfkls')

// Tipos declarados automaticamente pelo TS
let x= 5;

soma(x, 4)

// Declarando tipos na função

function cadastraAluno(aluno:{matricula: number, nome: string}) {
    
}

cadastraAluno({matricula: 1234, nome: 'Daniel'});

// Criando e Usando Interfaces
interface Aluno{
    matricula: number,
    nome: string,
    dataNascimento: string
}
function cadastraAluno2(aluno: Aluno) {
    
}

cadastraAluno2({matricula: 1234, nome: 'Daniel', dataNascimento: '11/11/2020'});

// Compatibilidade de  Tipos: Podemos usar o ? para tirar a obrigatoriedade 

let aluno2 = {
    matricula: 123,
    nome: 'João',
    dataNascimento: '01/02/2020',
    turma: 3
}

cadastraAluno2(aluno2)

// Classes, ou seja usamos as funções dentro das classes ;)

class Estudante {
    matricula: number;
    nome: string;

    salvar(){

    }
}
let estudante1 = new Estudante;

estudante1.salvar();

 // estudante1.alterar(); Erro porque não existe a função na classe estudante


 // Funções e interfavces Typescript 2.0

 function insertAluno(aluno:{matricula:number, nome}) {
     
 }