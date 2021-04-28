//const li = document.querySelectorAll('li');
// li.forEach(function (item) { item.classList.add('ativa')})
// li.forEach((item, index) => item.classList.add('ativa' + index));

// console.log(li);

// const carros = [ 'Ford', 'Fiat', 'Honda'];

// carros.forEach((item, index, array) => {
//     //array[index]= 'Teste';
//     console.log(item.toUpperCase(), index, array)
// }) 
// const retornoMap = carros.map((item, index, array) => {
//     return 'Carro ' + item.toUpperCase() + index + ' ' + array


// });
// console.log(carros);
// console.log(retornoMap[1] = 'Teste');
// console.log(retornoMap);

// const numeros = [ 2, 3, 4, 5, 6, 77];
// const numerosX2 = numeros.map(n => n *3);
// console.log(numerosX2);

// const aulas = [
//     {
//         nome: 'HTML',
//         min: 15
//     },
//     {
//         nome: 'SVG',
//         min: 10
//     },
//     {
//         nome: 'CSS',
//         min: 20
//     },
//     {
//         nome: 'JavaScript',
//         min: 15
//     },
//     {
//         nome: 'Angular',
//         min: 35
//     }
// ]


// const tempoAulas = aulas.map(aula => aula.min);

// const nomeAulas = (aula) => aula.nome;

// const arrayNomeAulas = aulas.map(nomeAulas);

// console.log(arrayNomeAulas)
// console.log(tempoAulas);

/* const aulas = [10, 15, 40];

const totalAulas = aulas.reduce((acumulador, item, index, array) => {
    return acumulador + item
},20)

console.log(totalAulas)

const numeros = [ 10, 25, 90 , 3 , 6 ,20];

const maiorNumero = numeros.reduce((anterior, atual) => {
    // if (anterior > atual) 
    //   return anterior
    //else 
    //   return atual
    return anterior > atual ? anterior : atual;
})
console.log(maiorNumero) */

// const aulas = [
//     {
//         nome: 'HTML',
//         min: 15
//     },
//     {
//         nome: 'SVG',
//         min: 10
//     },
//     {
//         nome: 'CSS',
//         min: 20
//     },
//     {
//         nome: 'JavaScript',
//         min: 15
//     },
//     {
//         nome: 'Angular',
//         min: 35
//     }
// ]
// const listaAulas = aulas.reduce((acumulador, item, index) => {
//     acumulador[index] = item.nome;
//     return acumulador
// }, {})

// console.log(listaAulas)

// const frutas = ["Banana", '', "Maça", "Pera"];

// const temUva = frutas.some((item) => {
//     //console.log(item)
//     return item === 'Banana';
// })

// console.log(temUva)

// const every = frutas.every((fruta) => {
//     console.log(fruta)
//     //return item === 'Banana';
//     return fruta
// })
// console.log(every)

// const numeros = [6, 45, 33, 11, 19, 44, 101];
// const maiorQue102 = numeros.every(n => n >= 6);
// console.log(maiorQue102);

// const numeros = [6, 45, 33, 11, 19, 44, 101];

// const buscaMaior45 = numeros.find(x => x > 45);
// console.log(buscaMaior45)

// const frutas = ['Banana', undefined, null, '', 'Pera', 0 , 'Maça', 'Uva', 'Banana'];

// const buscaUva = frutas.findIndex((fruta) => {
//     return fruta === 'Uva';
// })
// console.log(buscaUva)

// const filtraItem = frutas.filter((item) => {
//     return item === 'Banana'
//     //return item
// })

// console.log(filtraItem)

// const filtraNumeros = numeros.filter((n => n > 44));
// console.log(filtraNumeros)

const aulas = [
    {
        nome: 'HTML',
        min: 15
    },
    {
        nome: 'SVG',
        min: 10
    },
    {
        nome: 'CSS',
        min: 20
    },
    {
        nome: 'JavaScript',
        min: 15
    },
    {
        nome: 'Angular',
        min: 35
    }
]

const maiores15 = aulas.filter((aula) =>{
    console.log(aula.min);
    return aula.min > 15
})

console.log(maiores15)