/* const Dom = {
    seletor: 'li',
    element(){
        return document.querySelector(this.seletor)
    },
    ativo(){
        this.element().classList.add('ativo')
    }
}
Dom.ativo();

Dom.seletor = 'ul'; 

Dom.ativo();
*/
function Dom (seletor){
    this.element = function(){
        return document.querySelector(seletor);
    }
    this.ativar = function(classe){
        this.element().classList.add(classe);
    }
}

const li = new Dom ('li');
const ul = new Dom ('ul');

const lastLi = new Dom ('li:last-child');

li.ativar('ativo');

