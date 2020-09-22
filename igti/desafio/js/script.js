window.addEventListener('load', start);

function sum(a, b) {
    return a + b;
}
function sub1(a, b) {
    return a - b;
}
function sub2(a, b) {
    return b - a;
}
function multi(a, b) {
    return a * b;
}
function div1(a, b) {
    return a / b;
}
function div2(a, b) {
    return b / a;
}
function quad1(a) {
    return a * a;
}
function quad2(b) {
    return b * b;
}
function divisores1(a) {
    let divisoresA = [];
    for (let i = 1; i <= a; i++) {
        if (a % i === 0) {
            divisoresA.push(i);
        }
    }
    return divisoresA.join(', ') + '(' + divisoresA.length + ')';
    
}
function divisores2(b) {
    let divisoresB = [];
    for (let i = 1; i <= b; i++) {
        if (b % i === 0) {
            divisoresB.push(i);
        }
    }
    return divisoresB.join(', ') + '(' + divisoresB.length + ')';
    
}
function fatorial1(a) {
    if (a > 21){
        return 'Número muito grande.';
    }
    var factorial = 1;

    for (let i = a; i > 1; i--) {
        factorial *= i;
    }
    return (factorial);
    
}
function fatorial2(b) {
    if (b > 21){
        return 'Número muito grande.';
    }
    var factorial = 1;

    for (let i = b; i > 1; i--) {
        factorial *= i;
    }
    return (factorial);
    
}
function start() {
    inputName = document.querySelector('#inputName');

    preventFormSubmit();
}
function preventFormSubmit() {
    function handleFormSubmit(event) {
        event.preventDefault();
    }
    var form = document.querySelector('form');
    form.addEventListener('submit', handleFormSubmit);

}
function onFocusCalc(a,b) {
    var a = document.querySelector('#valor1').value;
    var b = document.querySelector('#valor2').value;
    a = parseInt(a);
    b = parseInt(b);
    var inputSoma = document.querySelector('#soma');
    var inputSub1 = document.querySelector('#subtracao1');
    var inputSub2 = document.querySelector('#subtracao2');
    var inputMult = document.querySelector('#multiplicacao');

    var inputDiv1 = document.querySelector('#div1');
    var inputDiv2 = document.querySelector('#div2');
    var inputQuad1 = document.querySelector('#quad1');
    var inputQuad2 = document.querySelector('#quad2');
    var inputDivisores1 = document.querySelector('#divisores1');
    var inputDivisores2 = document.querySelector('#divisores2');
    var inputFatorial1 = document.querySelector('#fatorial1');
    var inputFatorial2 = document.querySelector('#fatorial2');

    
    inputSoma.value = (sum(a,b));
    inputSub1.value = (sub1(a,b));
    inputSub2.value = (sub2(a,b));
    inputMult.value = (multi(a,b));

    inputDiv1.value = (div1(a,b));
    inputDiv2.value = (div2(a,b));
    inputQuad1.value = (quad1(a));
    inputQuad2.value = (quad2(b));
    inputDivisores1.value = (divisores1(a));
    inputDivisores2.value = (divisores2(b));
    inputFatorial1.value = (fatorial1(a));
    inputFatorial2.value = (fatorial2(b));

    
}

function clearInput() {
    inputName.value = '';
    inputName.focus();
}