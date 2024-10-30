function parimpar(n) {
    if (n % 2 == 0)
        return(`O número ${n} é par`)
    else{
        return(`O número ${n} é ímpar`)
    }
}
var res = parimpar(11)
console.log(res)