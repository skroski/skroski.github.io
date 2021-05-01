// const perimetro = new Function ('lado', 'return lado * 4');

// function somar(n1, n2, n3) {
//     return n1 + n2;
// }

// console.log(somar.name.toUpperCase)

// function darOi(nome, idade) {
//     console.log(1, 'Oi para você ' + nome + ' ' + idade)
// }

// darOi.call({}, 'Daniel', '40')
// window.marca = 'Marca '
// window.ano = 2010
// function descricaoCarro(velocidade) {
//     console.log(2, this);
//     console.log(3, this.marca + '' + this.ano + velocidade)
    
// }
// descricaoCarro.call({marca: 'Honda ', ano: 2015}, 100)


// Exemplo do CALL
// const carros = [ 'Ford', 'Fiat',  'VW'];
// carros.forEach.call(carros,(item) => {
//     console.log(item)
// })
// Exemplo do CALL mas usando frutas no objeto com CARROS no forEach
// const frutas = ['Uva', 'Banana', 'Pera'];
// carros.forEach.call(frutas,(item) => {
//     console.log(item)
// })

// function Dom(seletor) {
//     this.element = document.querySelector(seletor)
// }

// Dom.prototype.ativo = function (classe) {
//     this.element.classList.add(classe);
// }

// const lista = new Dom('ul');
// lista.ativo('ativar');
// console.log(lista);
// const li = {
//     element: document.querySelector('li')
// }

// lista.ativo.call(li, 'ativo')

const frutas = ['Uva', 'Banana', 'Pera'];

Array.prototype.mostrarThis = function () {
    console.log(1, this)
}

//Array.prototype.pop.call(frutas)
frutas.pop();
const li = document.querySelectorAll('li');
const arrayLi = Array.from(li);

const filtro = arrayLi.filter.call(li, (item) => {
    
    return item.classList.contains('ativo')
    
})

//console.log(3, li)
console.log(4, filtro)

const numeros = [ 12, 33,2,11,3,44,1123,44423,442333]