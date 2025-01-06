function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas. `
    if (hora >= 0 && hora < 12) {
        //Bom dia!
        img.src = 'foto_manhã.jpg'
        document.body.style.background = '#FFD700'
    }
    else if (hora >= 12 && hora <= 18) {
        //Boa tarde!
        img.src = 'foto_tarde.jpg'
        document.body.style.background = '#FF4500'

    }
    else {
        //Boa noite!
        img.src = 'foto_noite.jpg'
        document.body.style.background = '#000080'

    }
}

