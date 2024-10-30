function enviar() {
    var n1 = Number(document.querySelector('#txtnumero1').value);
    var n2 = Number(document.getElementById('txtnumero2').value);
    var res = document.querySelector('#resultado');

    function visivel() {
        var ver = document.getElementById('resultado')
        ver.style.display = 'block'
    }

    if (n2 > n1) {
        visivel()
        res.innerHTML = 'Correto! O segundo número é maior que o primeiro!'
    }
    else if (n1 == n2) {
        visivel()
        res.innerHTML = 'Digite números que não sejam iguais!'
    }

    else {
        visivel()
        res.innerHTML = 'Error! O segundo número é menor que o primeiro!'
    }
}