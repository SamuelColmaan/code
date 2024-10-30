function contarNumeros() {
    let inicio = Date.now(); // Marca o tempo inicial em milissegundos
    let contador = 0;
    
    // Loop até passar 1 segundo (1000 milissegundos)
    while (Date.now() - inicio < 1000) {
        contador++;
    }
    
    return contador;
}

// Executa a função e imprime o resultado
let quantidade = contarNumeros();
console.log(`O PC conseguiu contar até ${quantidade} em 1 segundo.`);
