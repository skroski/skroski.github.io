const h1 = document.querySelector('h1');

const naturezaLista = document.querySelector('.natureza-lista')
// h1.outerHTML = '<p> Teste</p>';
// console.log(naturezaLista.parentElement);
// console.log(naturezaLista.parentElement.parentElement);
// console.log(naturezaLista.parentElement.previousElementSibling);
// console.log(naturezaLista.nextElementSibling);
// console.log (naturezaLista.children[0]);
// console.log(--naturezaLista.children.length);
// console.log(--naturezaLista.querySelector('li:last-child'));

// console.log(naturezaLista.previousSibling)
const natureza = document.querySelector('.natureza');
const contato = document.querySelector('.contato');
const titulo = contato.querySelector('.titulo');

// contato.insertBefore(natureza, titulo);

// contato.removeChild(titulo);

// contato.replaceChild(titulo, natureza)

const novoh1 = document.createElement('h1');
console.log(novoh1);
novoh1.innerText= 'Novo T[itulo';
novoh1.classList.add('titulo');

// natureza.appendChild(novoh1);

const faq = document.querySelector('.faq');
const cloneH1 = h1.cloneNode(true);
cloneH1.classList.add('azul');
faq.appendChild(h1);

const menu = document.querySelector('.menu');
const copy = document.querySelector('.copy');

const cloneMenu = menu.cloneNode(true);
copy.appendChild(cloneMenu);