function popularFiltros() {
    const tabelaLidos = document.getElementById('tabela-lidos');
    const filtrosTituloLidos = document.getElementById('filtro-titulo-lidos');
    const filtrosAutorLidos = document.getElementById('filtro-autor-lidos');
    const filtrosGeneroLidos = document.getElementById('filtro-genero-lidos');
    
    const rows = tabelaLidos.querySelectorAll('tbody tr');
    const titulos = new Set();
    const autores = new Set();
    const generos = new Set();
    
    rows.forEach(row => {
        const cells = row.querySelectorAll('td');
        titulos.add(cells[0].textContent.trim());
        autores.add(cells[1].textContent.trim());
        generos.add(cells[3].textContent.trim());
    });
    
    filtrosTituloLidos.innerHTML = `<option value="">Selecione um título</option>` +
        Array.from(titulos).map(titulo => `<option value="${titulo}">${titulo}</option>`).join('');
    filtrosAutorLidos.innerHTML = `<option value="">Selecione um autor</option>` +
        Array.from(autores).map(autor => `<option value="${autor}">${autor}</option>`).join('');
    filtrosGeneroLidos.innerHTML = `<option value="">Selecione um gênero</option>` +
        Array.from(generos).map(genero => `<option value="${genero}">${genero}</option>`).join('');
}

function filtrarTabela() {
    const filtroTituloLidos = document.getElementById('filtro-titulo-lidos').value;
    const filtroAutorLidos = document.getElementById('filtro-autor-lidos').value;
    const filtroGeneroLidos = document.getElementById('filtro-genero-lidos').value;

    const tabelas = [
        { table: document.getElementById('tabela-lidos'), titulo: filtroTituloLidos, autor: filtroAutorLidos, genero: filtroGeneroLidos }
    ];

    tabelas.forEach(({ table, titulo, autor, genero }) => {
        const rows = table.querySelectorAll('tbody tr');
        rows.forEach(row => {
            const cells = row.querySelectorAll('td');
            const tituloTexto = cells[0].textContent.trim();
            const autorTexto = cells[1].textContent.trim();
            const generoTexto = cells[3].textContent.trim();
            
            const visivel = (tituloTexto.includes(titulo) || titulo === '') &&
                            (autorTexto.includes(autor) || autor === '') &&
                            (generoTexto.includes(genero) || genero === '');
            
            row.style.display = visivel ? '' : 'none';
        });
    });
}

function atualizarTotalLivros() {
    const rows = document.querySelectorAll('#tabela-lidos tbody tr');
    let count = 0;
    
    rows.forEach(row => {
        const cells = row.querySelectorAll('td');
        if (cells[0].textContent.trim() !== '') {
            count++;
        }
    });
    
    document.getElementById('total-livros').textContent = `Total de livros: ${count}`;
}

document.addEventListener('DOMContentLoaded', () => {
    popularFiltros();
    filtrarTabela();
    atualizarTotalLivros();

    document.getElementById('filtro-titulo-lidos').addEventListener('change', filtrarTabela);
    document.getElementById('filtro-autor-lidos').addEventListener('change', filtrarTabela);
    document.getElementById('filtro-genero-lidos').addEventListener('change', filtrarTabela);
});
