$(document).ready(function () {
    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '(00) 00000-0000'
    })


$('form').validate({
    rules: {
        nome: {
            required: true
        },
        email: {
            required: true,
            email: true
        },
        telefone: {
            required: true
        },
    },
    submitHandler: function (form) {
        alert("Sua requisição foi enviada para análise, parabéns pela aquisição!");
        form.reset();
    },
    invalidHandler: function (form, validador) {
        let camposIncorretos = validador.numberOfInvalids();
        alert("Por favor, preencha os campos para prosseguir com a compra!");
    }
})
})