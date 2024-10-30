var agora = new Date()
var day = agora.getDay()
console.log(day)

switch(day) {
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda-feira')
        break
    case 2:
        console.log('Terça-feira')
        break
    case 3:
        console.log('Quarta-feira')
        break
    case 4:
        console.log('Quinta-feira')
        break
    case 5:
        console.log('Setxa-feira')
        break
    case 6:
        console.log('Sábado')
        break
    default:
        console.log('Isso não era pra aparecer')
}