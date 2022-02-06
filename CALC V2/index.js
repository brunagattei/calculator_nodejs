const {somar, subtrair, multiplicar, dividir} = require('./calculadora');
const inqImp = require('inquirer');

inqImp.prompt([
    { name: 'a', message:'Digite o valor de A:'},
    { name: 'b', message:'Digite o valor de B:'},
    { 
        name: 'calculadora', 
        message: 'Qual operação você deseja utilizar?',
        type: 'list',
        choices: ['somar', 'subtrair', 'multiplicar', 'dividir']
    }
]).then((answers) => {
    let a = parseFloat(answers.a)
    let b = parseFloat(answers.b)

    if(isNaN(a) || isNaN(b)){
        console.log('Informe um número válido!!!')
    }

    switch(answers.calculadora){
        case 'somar':
            console.log(soma(a,b));
            break
        case 'subtrair':
            console.log(subtrair(a,b));
            break
        case 'multiplicar':
            console.log(multiplicar(a,b));
            break
        case 'dividir':
            console.log(dividir(a,b));
            break
        default: break
    }
}).catch((err) => console.log(err))