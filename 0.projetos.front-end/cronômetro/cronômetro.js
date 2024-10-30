var x = 0;

var interval = setInterval(function() {
console.log(x);
x += 1;


if (x >= 60) {
    clearInterval(interval);
}
}, 1000);  

/* Com isso eu faço ele printar na tela 3 segundos depois
x = 0
setTimeout(function() {
    console.log('x')

}, 3000) */


/*var x = 2;

var interval = setInterval(function() {
console.log(x);
x *= 2;


if (x >= Infinity) {
    clearInterval(interval);
}
}, 300);
*/

/*
var x = 0;
var start = Date.now();

while (Date.now() - start < 10000) { // Executa por 1 segundo
console.log(x)
x += 1;
}

console.log('Número contado:', x);
*/


