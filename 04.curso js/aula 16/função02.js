/*Eu posso estabelecer como parâmetro 0 para precaução caso não passe algum dos parâmetros e ai será considerado o valor pré-definido*/
function soma(n1=0, n2=0) {
    return n1 + n2
}
console.log(soma(5, 4))