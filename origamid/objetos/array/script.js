/* const instrumentos = ['Guitarra', 'Baixo', 'Violão'];
const precos = [ 49,99,69,89];

const carros = new Array('Ford', 'Fiat', 'Honda');
carros[2] = 'Ferrari';
carros[3] = 'Kia';
carros[20] = 'Jeep'
console.log(carros);
console.log(carros.length);
const li = document.querySelectorAll('li');
console.log(li);

const arrayLi = Array.from(li);

console.log(arrayLi)


const obj ={

    0: 'Daniel',
    1: 'João',
    2: 'Teste',
    length: 4,
}
console.log(obj);

const frutas = [ 'Banana', 'Maçã', ['Uva Roxa', 'Uva Verde']];
console.log(frutas[2][0].length);
 */


/* const instrumentos = ['Guitarra', 'Baixo', 'Violão'];
instrumentos.sort();
console.log(instrumentos);

const idades = [ 32,21,33,43,1,12,8];
idades.sort();
console.log(idades); */

const carros = ['Ford', 'Fiat', 'Honda'];

carros.unshift('Tesla', 'Ferrari');
carros.push('Parati', 'Golf') 

//console.log(carros.pop());
//console.log(carros.shift())

//console.log(carros.reverse());

//console.log(carros.splice(1, 0, 'Kia', 'Mustang'));

//console.log(carros.splice(3, 1, 'Fusca', 'Palio'));

// console.log(carros);

// console.log (['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'].copyWithin(2, 0, 2));

// console.log (['Item 1', 'Item 2', 'Item 3', 'Item 4'].fill('Banana', 1, 3));

// const transporte1 = [ 'Barco', 'Avião'];
// const transporte2 = [ 'Carro', 'Moto'];

// console.log(transporte1.concat(transporte2));

const linguagens = [ 'html', 'css', 'js', 'python', 'php'];

console.log(linguagens.includes('js'));
console.log(linguagens.join(''));
console.log(linguagens.slice(2,3))
