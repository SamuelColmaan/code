const form = document.getElementById('form-deposito');
const nomeBeneficiario = document.getElementById('nome-beneficiario');
const errorMessage = document.getElementsByClassName('error-message')[0];
const containerMensagemSucesso = document.querySelector('.sucess-message');
let formEvalido = false;

function ValidaNome(nomeCompleto) {
    const nomecomArray = nomeCompleto.split(' ');
    return nomecomArray.length >= 2;
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const numeroContaBeneficiario = document.getElementById('numero-conta');
    const valorDeposito = document.getElementById('valor-deposito');
    const mensagemSucesso = `Montante de: <b>${valorDeposito.value}</b> depositado para o cliente <b>${nomeBeneficiario.value}</b> - conta <b>${numeroContaBeneficiario.value}</b>`;

    formEvalido = ValidaNome(nomeBeneficiario.value);
    if (formEvalido) {
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';
        errorMessage.style.display = 'none';

        nomeBeneficiario.value = '';
        numeroContaBeneficiario.value = '';
        valorDeposito.value = '';
        nomeBeneficiario.style.border = '';
    } else {
        nomeBeneficiario.style.border = '1px solid red';
        errorMessage.style.display = 'block';
    }
});

nomeBeneficiario.addEventListener('keyup', function(e) {
    formEvalido = ValidaNome(e.target.value);
    if (!formEvalido) {
        nomeBeneficiario.classList.add('error')
        errorMessage.style.display = 'block';
    } else {
        nomeBeneficiario.classList.remove('error')

        errorMessage.style.display = 'none';
    }
});
