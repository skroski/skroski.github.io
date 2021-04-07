// Métodos Number
/* console.log(Number.isNaN(NaN));
console.log(Number.isInteger(10));
console.log(Number.parseFloat('10,888'));
console.log(Number.parseInt('108.88'));
console.log(parseInt('108.88, 10'));
const preco = 10.3939299;
console.log(+preco.toFixed() + 833);
const valor = 47.32332;
console.log(valor.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})); */
// Métodos Math
/* console.log(Math.PI);
console.log(Math.abs(3))
console.log(Math.abs(3-7))
console.log(Math.abs(-3-7))
console.log(Math.abs(8))
console.log(Math.round(4.5))
console.log(Math.round(4.4))
console.log(Math.ceil(5.1))
console.log(Math.floor(4.8)) */

//Retorna numeros entre 1050 e 2000
const aleatorio = Math.floor((Math.random() * (2000 - 1050 +1) + 1050))
console.log(aleatorio)


const numeros = '4 , 5, 20, 27, 9';
const arrayNumeros = numeros.split(', ');
const numeroMaximo = Math.max(...arrayNumeros);
console.log(numeroMaximo);


