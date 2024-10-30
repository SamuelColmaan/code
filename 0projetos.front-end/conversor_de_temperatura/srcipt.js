function converter() {
    var num1 = Number(document.querySelector('#nume1').value)
    var celcius = document.querySelector('#txtcelcius')
    var fahrenheit = document.querySelector('#fahrenheit')
    var kelvin = document.querySelector('#txtkelvin')
    var c = document.querySelector('#txtcel')
    var f = document.querySelector('#txtfah')
    var k = document.querySelector('#txtkel')
    var res = document.querySelector('#nume2')

    if (celcius.checked && f.checked) {
        res.value = ((num1 * 9/5) + 32)
    }
    else if (celcius.checked && k.checked) {
        res.value = num1 + 273.15
    }
    else if (fahrenheit.checked && c.checked) {
        res.value = (num1 - 32) * 5/9
    }
    else if (fahrenheit.checked && k.checked) {
        ((num1 - 32) * 5/9) + 273.15
    }

    else if (kelvin.checked && c.checked) {
        num1 - 273.15
    }

    else if (kelvin.checked && f.checked) {
        ((num1 - 273.15) * 9/5) + 32
    }

    else {
        alert('Por favor, insira apenas números válidos')
    }
}
