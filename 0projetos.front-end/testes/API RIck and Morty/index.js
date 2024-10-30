// Seleciona o elemento de entrada onde o usuário insere o ID do personagem
const characterId = document.getElementById('characterId');

// Seleciona o botão que o usuário clicará para iniciar a busca do personagem
const btnGo = document.getElementById('btn-go');

// Seleciona o elemento <pre> onde as informações do personagem serão exibidas
const content = document.getElementById('content');

// Seleciona o elemento <img> onde a imagem do personagem será exibida
const image = document.getElementById('img');

// Função responsável por buscar dados da API Rick and Morty utilizando o ID fornecido pelo usuário
const fetchApi = (value) => {
    // Realiza uma solicitação HTTP para a API utilizando o ID do personagem
    const result = fetch(`https://rickandmortyapi.com/api/character/${value}`)
        // Converte a resposta da API de um objeto HTTP para um objeto JSON
        .then((res) => res.json())
        // Após a conversão, manipula os dados recebidos
        .then((data) => {
            console.log(data); // Exibe os dados no console para depuração e verificação
            return data; // Retorna os dados obtidos para uso posterior
        })
        .catch((error) => {
            console.error('Error fetching the API:', error); // Exibe um erro no console se a requisição falhar
        });

    return result; // Retorna a Promise que contém os dados do personagem
}

// Lista de chaves que serão verificadas nos checkboxes
const keys = ['name', 'status', 'species', 'gender', 'origin', 'image', 'episode']

// Função que constrói o objeto com as informações selecionadas pelos checkboxes
const buildResult = (result) => {
    const newObject = {};
    keys.map((key) => document.getElementById(key))
        .map((elem) => {
            if (elem.checked) {
                if (key === 'origin') {
                    newObject[key] = result[key].name; // Acessa o nome da origem
                } else {
                    newObject[key] = result[key];
                }
            }
        });

    return newObject;
}

// Adiciona um evento de clique ao botão "Pesquisar" para disparar a busca
btnGo.addEventListener('click', async (event) => {
    event.preventDefault(); // Previne o comportamento padrão do formulário, que é recarregar a página
    const result = await fetchApi(characterId.value); // Chama a função fetchApi, passando o valor do ID inserido pelo usuário

    // Construir o objeto resultante com base nos checkboxes selecionados
    const selectedInfo = buildResult(result);

    // Mostrar o resultado formatado no <pre>
    content.textContent = `${JSON.stringify(selectedInfo, undefined, 2)}`;

    // Atualizar a imagem, se a opção foi selecionada
    if (selectedInfo.image) {
        image.src = selectedInfo.image;
    } else {
        image.src = ''; // Limpa a imagem se a opção não foi selecionada
    }
});
