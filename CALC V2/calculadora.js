function somar (a,b) {
    return (`A soma de ${a} + ${b} é igual a: ${a + b}`)
}

function subtrair (a,b) {
    return (`A substração de ${a} - ${b} é igual a: ${a - b}`)
}

function multiplicar (a,b) {
    return (`A multiplicação de ${a} * ${b} é igual a: ${a * b}`)
}

function dividir(a,b) {
    return (`A divisão de ${a} / ${b} é igual a: ${a / b}`)
}

module.exports = {
    somar,
    subtrair,
    multiplicar,
    dividir
}