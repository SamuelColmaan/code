document.addEventListener('DOMContentLoaded', function() {
    var apiKey = 'UJ7rD3ayiu6IZvPJPP5rEJGV1FQlMkxyeoxNbcaM'; // Substitua pela sua chave de API
    var url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;

    fetch(url)
        .then(function(response) {
            return response.json(); // Converte a resposta para JSON
        })
        .then(function(data) {
            // Atualiza o conteúdo da página com os dados recebidos
            document.getElementById('title').textContent = data.title;
            document.getElementById('explanation').textContent = data.explanation;

            var imageElement = document.getElementById('image');
            if (data.media_type === 'image') {
                imageElement.src = data.url;
                imageElement.style.display = 'block';
            } else {
                imageElement.style.display = 'none';
            }
        })
        .catch(function(error) {
            console.error('Error:', error); // Exibe erros no console
        });
});
