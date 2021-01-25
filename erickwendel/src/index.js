const EntityBase = require('../entityBase')

const e = new EntityBase({
    name: 'Erick Wndel',
    gender: "male",
}).name

console.log(new EntityBase({
    name: 'Xuxa da Silva',
    gender: "female",
}).name)