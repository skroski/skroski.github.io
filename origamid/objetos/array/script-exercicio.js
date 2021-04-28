const comidas = [ 'Pizza', 'Frango', 'Carne', 'Macarrão'];
// .shift() Remove o primeiro valor da array
// .pop() Remove o último valor da array
const primeiroValor = comidas.shift(); // primeiroValor fica com o primeiro item
const ultimoValor = comidas.pop(); // ultimoValor fica com o ultimo item

comidas.push('Arroz'); // insere o Arroz no último item
comidas.unshift('Peixe', 'Batata'); // insere Peixe e Batata no primeiro item

console.log(primeiroValor);
console.log(ultimoValor);
console.log(comidas);

const estudantes = ['Daniel', 'João', 'Roberto', 'Julia', 'Alfreda']

estudantes.sort()
console.log(estudantes);
estudantes.reverse()
console.log(estudantes);

console.log(estudantes.includes('Julia'));
console.log(estudantes.includes('Juliana'));

let html = `
    <section>
    <div>Sobre</div>
    <div>Produtos</div>
    <div>Contato</div>
    </section>
`

html = html.split('section').join('ul').split('div').join('li');

console.log(html);

const carros = ['Ford', 'Fiat', 'VW', 'Honda'];

const carrosCopia = carros.slice();

console.log(carros);

carros.pop()
console.log(carros)
console.log(carrosCopia)
