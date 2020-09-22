console.log('Oi');

var title = document.querySelector('h1');
title.textContent = "Mudei o Dado";
var city = document.querySelector('#city');
var personalDataArray = document.querySelectorAll('.personal-data');

var data = Array.from(document.querySelectorAll('.data'));
for (var i = 0; i < data.length; i++) {
    var currentElement = data[i];
    currentElement.style.color = 'red';
    
}
for (var i = 0; i < data.length; i++) {
    var currentElement = data[i];
    currentElement.classList.add('bolder');
    
}
console.log(data);

var p1 = document.querySelector('#p1');
var p2 = document.querySelector('#p2');
var p3 = document.querySelector('#p3');

p1.classList.add('default');
p2.classList.add('success');
p3.classList.add('danger');