function hideButton() {
    document.getElementById('hide-button').style.display = 'none';
    document.body.style.backgroundImage = 'URL("https://img.freepik.com/fotos-gratis/fundo-de-galaxia-fotorrealista_23-2151064385.jpg")'
    document.body.style.backgroundSize = 'cover'; 
    document.body.style.backgroundPosition = 'center'; 
    document.body.style.backgroundRepeat = 'no-repeat';
    document.getElementById('content').style.display = 'block'
     var content = document.getElementById('content');
    content.style.display = 'block'; // Mostra o elemento, mas ainda invisível
    setTimeout(function() {
        content.classList.add('show'); // Adiciona a classe que ativa a animação
    }, 10); // Pequeno atraso para garantir que o display seja aplicado antes da animação
}