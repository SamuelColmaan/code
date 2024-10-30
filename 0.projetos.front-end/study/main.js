$(document).ready(function() {
    // Variáveis de endereço
    var taquaraAddresses = [
        'Avenida dos mananciais, 255',
        'Avenida dos mananciais, 436',
        'Estrada do Tindiba, 3250',
        'Estrada do Rio Grande, 1159'
    ];
    var freguesiaAddress = 'Estrada dos Três Rios';
    var recreioAddress = 'Praça Miguel Osório, 22';

    // Função para exibir os endereços da Taquara
    function displayTaquaraAddresses() {
        var currentText = $('#address-display').html(); // Usar .html() para adicionar múltiplos endereços
        var newContent = taquaraAddresses.join('<br>'); // Adiciona os endereços com quebra de linha
        if (currentText.includes('Avenida dos mananciais') || currentText.includes('Estrada do Tindiba') || currentText.includes('Estrada do Rio Grande')) {
            // Se algum dos endereços da Taquara já estiver sendo exibido, remove-os
            $('#address-display').html('');
        } else {
            $('#address-display').html(newContent);
        }
    }

    // Função para exibir ou ocultar outros endereços
    function toggleOtherAddress(address) {
        var currentText = $('#address-display').text();
        if (currentText === address) {
            $('#address-display').text('');
        } else {
            $('#address-display').text(address);
        }
    }

    // Eventos de clique para cada unidade
    $('#div1').click(function() {
        displayTaquaraAddresses(); // Exibe todos os endereços da Taquara
    });

    $('#div2').click(function() {
        toggleOtherAddress(freguesiaAddress); // Exibe ou oculta o endereço da Freguesia
    });

    $('#div3').click(function() {
        toggleOtherAddress(recreioAddress); // Exibe ou oculta o endereço do Recreio
    });

    // Outros eventos
    $('#button1').click(function() {
        Toastify({
            text: "One click",
            duration: 3000, 
            gravity: "bottom", 
            position: "right", 
            backgroundColor: "#000000",
            stopOnFocus: true, 
        }).showToast();
    });

    $('#button2').dblclick(function() {
        Toastify({
            text: "Double click",
            duration: 3000,
            gravity: "bottom", 
            position: "right", 
            backgroundColor: "#000000", 
            stopOnFocus: true, 
        }).showToast();
    });

    $('#button3').mouseenter(function() {
        Toastify({
            text: "Seja-Bem vindo ao Ícone",
            duration: 3000,
            gravity: "bottom",
            position: "right",
            backgroundColor: "#000000",
            stopOnFocus: true,
        }).showToast();
    });

    $('#button4').mouseleave(function() {
        Toastify({
            text: 'You left',
            duration: 3000,
            gravity: 'bottom',
            position: 'right',
            backgroundColor: '#000000',
            stopOnFocus: true,
        }).showToast();
    });

    $('#button5').mouseenter(function() {
        Toastify({
            text: 'Hi',
            duration: 3000,
            gravity: 'bottom',
            position: 'right',
            backgroundColor: '#000000',
            stopOnFocus: true,
        }).showToast();
    });

    $('#button5').mouseleave(function() {
        Toastify({
            text: 'Bye',
            duration: 3000,
            gravity: 'bottom',
            position: 'right',
            backgroundColor: '#000000',
            stopOnFocus: true,
        }).showToast();
    });

    $('#input-test').focus(function() {
        $(this).css('backgroundColor', '#FFD700');
    });
    $('#input-test').blur(function() {
        $(this).css('backgroundColor', '#FFFFFF');
    });

    $('#hide-p').click(function() {
        $('p').hide(1000);
    });
    $('#show-p').click(function() {
        $('p').show();
    });
    $('#both').click(function() {
        $('p').toggle(1000);
    });

    $('#toggle-button').click(function() {
        $('.content').fadeToggle();
    });
});