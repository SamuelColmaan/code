function calcular() {
    var peso = Number(document.querySelector('#txtpeso').value);
    var altura = Number(document.getElementById('txtaltura').value);
    var res = document.getElementById('res');
    var imc = peso / (altura ** 2);
    var imcFormatado = imc.toFixed(2);
    whit.style.display = 'block';
    if (imc < 18.5) {
        res.innerHTML = `Abaixo do peso - ${imcFormatado}`
    }
    else if (imc < 24.9 ) {
        res.innerHTML = `Peso normal - ${imcFormatado}`
    }
    else if (imc < 29.9) {
        res.innerHTML = `Sobrepeso - ${imcFormatado}`
    }
    else if (imc < 34.9) {
        res.innerHTML = `Obesidade grau 1 - ${imcFormatado}`
    }
    else if (imc < 39.9) {
        res.innerHTML = `Obesidade grau 2 - ${imcFormatado}`
    }
    else {
        res.innerHTML = `Obesidade grau 3 - ${imcFormatado}`
    }
}



/* if imc < 18.5:
        return "Abaixo do peso"
    elif 18.5 <= imc < 24.9:
        return "Peso normal"
    elif 25 <= imc < 29.9:
        return "Sobrepeso"
    else:
        return "Obesidade" */