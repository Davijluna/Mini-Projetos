const { frase } = require('./espreReg')

const espresso = /Davi/i;

console.log(espresso.exec(frase)[0])