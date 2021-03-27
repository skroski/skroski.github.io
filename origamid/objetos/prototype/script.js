function Pessoa (nome, sobrenome, idade){

    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;

}
Pessoa.prototype.nomeCompleto = function() { 
   return `O nome dessa pessoa é: ${this.nome} ${this.sobrenome} e tem ${this.idade} anos.`
}

const daniel = new Pessoa('Daniel', 'Skroski', 40)
const li = document.querySelector('li')