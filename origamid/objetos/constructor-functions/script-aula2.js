function Pessoa(nomePessoa, idadePessoa)
{
    this.nomePessoa = nomePessoa;
    this.idadePessoa = idadePessoa;

    this.andar = function(){
        console.log(this.nomePessoa + ' andou com ' + this.idadePessoa + ' anos.');
    }
}

const pessoa1 = new Pessoa('João', 20);
const pessoa2 = new Pessoa('Maria', 25);
const pessoa3 = new Pessoa('Bruno', 15);


pessoa1.andar();
pessoa2.andar();
pessoa3.andar();


function Dom(seletor){

    const elementList = document.querySelectorAll(seletor);
    this.elements = elementList;
    this.addClass = function(classe){
        elementList.forEach((element) => {
            element.classList.add(classe);
        })
    }
    this.removeClass = function(classe){
        elementList.forEach((element) => {
            element.classList.remove(classe);
            console.log('Removeu li ' + classe)
        })
    }

}
const listaItens = new Dom ('li');
const ul = new Dom ('ul');


ul.addClass('ativar');
listaItens.removeClass('ativo');