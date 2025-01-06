var valores = [8, 1, 7, 4, 2, 9]
valores.sort()
/*
console.log('Segue os valores do array')
for(var pos = 0; pos < valores.length; pos += 1) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
*/

for(var pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]} `)
}