function tabuada() {
    var n1 = Number(document.getElementById('txtnumero').value)
    var n2 = Number(document.getElementById('txtfinal').value)
    var res = document.getElementById('res')
    res.innerHTML = ''

    if (n2 === 0){
        alert('Você nao pode deixar o multiplicador como zero')
    }
    else {
    for(var i = 1; i <= n2; i += 1 ) {
        res.innerHTML += `${n1} x ${i} = ${n1 * i} <br> `
    }
    }
}