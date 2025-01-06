var num = [5, 8, 4]
num [3] = 6 // Acrescenta o valor 6 na key 3
num.push(7) // Acrescenta o valor dentro dos parênteses ao final 
num.push(1) // Como o push foi colocado após o sort o 1 vai ficar no final 
num.sort() // Coloca em ordem crescente os valores dentro do vetor

//num.length


console.log(`O conteúdo do vetor é: ${num}`)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é: ${num[0]}`)

var pos = num.indexOf(4)
var pos1 = num.indexOf(10)
console.log(`O valor 4 está na posição ${pos}`) // Valor que existe retorna a posição

if (pos1 == -1) {
    console.log(`O valor não existe`)
}
else {
    console.log(`O valor 10 está na posição ${pos1}`) // Valor que não existe retorna -1


}