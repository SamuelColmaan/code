var idade = 17
if (idade < 16) {
    console.log(`Você tem ${idade} anos. Você não vota`)
}
else if (idade < 18) {
    console.log(`Você tem ${idade} anos. Seu voto é opcional`)
}
else if (idade < 65) {
    console.log(`Você tem ${idade} anos. Seu voto é obrigatório`)
}
else {
    console.log(`Você tem ${idade} anos. Seu voto é opcional`)
}