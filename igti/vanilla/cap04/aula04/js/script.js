let globalNames = ['Um', 'Dois', 'Três', 'Quatro', 'Cinco'];
let inputName = null;
let currentIndex = null;
let isEditing = false;

window.addEventListener('load', () => {
    inputName = document.querySelector('#inputName');
    preventFormSubmit();
    activateInput();
    render();
});


function preventFormSubmit() {
    function handleFormSubmit(event) {
        event.preventDefault();
    }
    let form = document.querySelector('form');
    form.addEventListener('submit', handleFormSubmit);

}
function activateInput() {
    function insertName(newName) {
        //globalNames.push(newName);
        //console.log(globalNames);
        globalNames = [...globalNames, newName];
       render();
    }
    function updateName(newName){
        //console.log(newName);
        //console.log(currentIndex)
        globalNames[currentIndex] = newName;
        render();
       
    }
    function handleTyping(event) {
        if (event.key === 'Enter' && event.target.value.trim() !== '') {

            let  hasText = !!event.target.value && event.target.value.trim() !=='';
            if(!hasText){
                clearInput();
                return;
            }
           //console.log(event.target.value);
           if (isEditing) {
               console.log('editing...');
               updateName(event.target.value);
           }
           else{
               console.log('inserting...');
                insertName(event.target.value)
           }
           isEditing = false;
           
           
           clearInput();
        }
    }
    
    inputName.addEventListener('keyup', handleTyping);
    inputName.focus();
}
function render() {
    function createDeleteButton(index) {
        function deleteName() {
           // globalNames.splice(index, 1);
            //globalNames = globalNames.filter(name, i => {
               // if (i === index){
               //   return false;
               //  }
               // return i !== index;
            //});
            globalNames = globalNames.filter((_, i) => i !== index);
            render();
        }
        let button = document.createElement('button');
        button.classList.add('deleteButton');
        button.textContent = 'x';
        button.addEventListener ('click', deleteName)
        return button;
    }
    function createSpan(name, index) {
        function editItem() {
            inputName.value = name;
            inputName.focus;
            isEditing = true;
            currentIndex = index;
        }
        let span = document.createElement('span');
        span.classList.add('clickable');
        span.textContent = name;
        span.addEventListener ('click', editItem)
        return span;
    }
    let divNames = document.querySelector('#names');
    divNames.innerHTML = '';
    //Criar ul
    // Fazer n li's, conforme tamanho do globalNames
    // divNames.innerHTML = '<ul> <li> Nome 1</li>'
    let ul = document.createElement('ul');
    // let li1 = document.createElement('li');
    // let li2 = document.createElement('li');

    // li1.textContent = 'Primeiro';
    // li2.textContent = 'Segundo';
    // ul.appendChild (li1);
    // ul.appendChild (li2);

    for (let i = 0; i < globalNames.length; i++) {
        let currentName = globalNames[i];
        let li = document.createElement('li');
        let button = createDeleteButton(i);
        let span =  createSpan(currentName, i);

        li.appendChild(button);
        li.appendChild(span);
        ul.appendChild(li);
    }
    divNames.appendChild(ul);
    clearInput();
}
/* function clearInput() {
    inputName.value = '';
    inputName.focus();
} */

const clearInput = () => {
    inputName.value = '';
    inputName.focus();
}