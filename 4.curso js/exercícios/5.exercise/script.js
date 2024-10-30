var valores = [];
var selectLista = document.querySelector('select#flista');

function isNumero(n) {
    return Number(n) >= 1 && Number(n) <= 100;
}

function inLista(n, l) {
    return l.indexOf(Number(n)) !== -1;
}

function atualizarSelect() {
    selectLista.innerHTML = ''; // Limpa o select
    for (var i = 0; i < valores.length; i++) {
        var option = document.createElement('option');
        option.text = valores[i];
        option.value = valores[i];
        selectLista.add(option);
    }
}

function adicionar() {
    var num = Number(document.getElementById('txtnum').value);
    if (isNumero(num) && !inLista(num, valores)) {
        valores.push(num);
        atualizarSelect();
        document.getElementById('txtnum').value = ''; // Limpa o campo de entrada
    } else {
        window.alert('Valor inválido ou já encontrado na lista.');
    }
}

function mostrarEstatisticas() {
    if (valores.length === 0) {
        window.alert('Não há números adicionados.');
        return;
    }
    
    var total = valores.length;
    var maior = Math.max(...valores);
    var menor = Math.min(...valores);
    var soma = valores.reduce((acc, val) => acc + val, 0);
    var media = soma / total;
    
    document.getElementById('res').innerHTML = `
        <p>Total de números: ${total}</p>
        <p>Maior número: ${maior}</p>
        <p>Menor número: ${menor}</p>
        <p>Soma dos números: ${soma}</p>
        <p>Média dos números: ${media.toFixed(2)}</p>
    `;
}
