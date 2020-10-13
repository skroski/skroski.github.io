var a = 4;
var b = 4;
if (a > b) {
    console.log (a +' é maior que ' + b );
} 
else{
    if (a < b) {
        console.log(a +' é menor que ' + b);
    }
    else{
        console.log (a +' é igual a ' + b);
    }
}
var r ='';
switch(4){
case 1 : r = 'Domingo'; break;
case 2 : r = 'Segunda'; break;
case 3 : r = 'Terça'; break;
case 4 : r = 'Quarta'; break;
case 5 : r = 'Quinta'; break;
case 6 : r = 'Sexta'; break;
case 7 : r = 'Sábado'; break;

default : r = 'Dia Inválido';
}
console.log(r);

// Operador Ternário
x = 6;
y = 6;
var resposta = x >y ? 'maior' : x < y ? 'menor' : 'igual';
console.log(resposta);
var dia = 7;
var diaSemana = 

dia === 1
 ? 'Domingo' : dia === 2
 ? 'Segunda' : dia === 3
 ? 'Terça' : dia === 4
 ? 'Quarta' : dia === 5
 ? 'Quinta' : dia === 6
 ? 'Sexta' : dia === 7
 ? 'Sábado' : 'Dia Inválido';

console.log(diaSemana);

// somatorio com while

var numAtual = 1;
var somatorio = 0 ;
while (numAtual <= 10) {
   // somatorio = somatorio + numAtual;
    somatorio += numAtual;
    numAtual++;
}
console.log('A soma é ' + somatorio)

do {
    somatorio += numAtual;
    numAtual++;
} while (numAtual <= 20);
console.log('A segunda soma é ' + somatorio)

var somatorio2 = 0;
for (numAtual2 = 1; numAtual2 <= 30; numAtual2++) {
    somatorio2 += numAtual2;
    
}
console.log('A terceira soma é ' + somatorio2);
/* var temp =num1;
num1 = num2
num1

num1 += 7
num1++
num1--
num1 += 3
num1 *= 2 */