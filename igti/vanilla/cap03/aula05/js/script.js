window.addEventListener('load', start);

var globalNames = ['Um', 'Dois', 'Três', 'Quatro', 'Cinco'];
var inputName = null;
var isEditing = false;
var currentIndex = null;

function start() {
    inputName = document.querySelector('#inputName');

    preventFormSubmit();
    activateInput();
    render();
    
}
function preventFormSubmit() {
    function handleFormSubmit(event) {
        event.preventDefault();
    }
    var form = document.querySelector('form');
    form.addEventListener('submit', handleFormSubmit);

}
function activateInput() {
    function insertName(newName) {
        globalNames.push(newName);
        //console.log(globalNames);
        render();
    }
    function updateName(newName){
        console.log(newName);
        console.log(currentIndex)
        globalNames[currentIndex] = newName;
        render();
    }
    function handleTyping(event) {
        if (event.key === 'Enter' && event.target.value.trim() !== '') {

            var  hasText = !!event.target.value && event.target.value.trim() !=='';
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
            globalNames.splice(index, 1);
            render();
        }
        var button = document.createElement('button');
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
        var span = document.createElement('span');
        span.classList.add('clickable');
        span.textContent = name;
        span.addEventListener ('click', editItem)
        return span;
    }
    var divNames = document.querySelector('#names');
    divNames.innerHTML = '';
    //Criar ul
    // Fazer n li's, conforme tamanho do globalNames
    // divNames.innerHTML = '<ul> <li> Nome 1</li>'
    var ul = document.createElement('ul');
    // var li1 = document.createElement('li');
    // var li2 = document.createElement('li');

    // li1.textContent = 'Primeiro';
    // li2.textContent = 'Segundo';
    // ul.appendChild (li1);
    // ul.appendChild (li2);

    for (let i = 0; i < globalNames.length; i++) {
        var currentName = globalNames[i];
        var li = document.createElement('li');
        var button = createDeleteButton(i);
        var span =  createSpan(currentName, i);

        li.appendChild(button);
        li.appendChild(span);
        ul.appendChild(li);
    }
    divNames.appendChild(ul);
    clearInput();
}
function clearInput() {
    inputName.value = '';
    inputName.focus();
}