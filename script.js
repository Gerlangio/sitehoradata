/*alert('Olá!') - é só um teste*/
/**
 * Passo 1 - criar uma funcion carregar
 */
function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    //var hora = data.getHours()
    var hora = 19
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //BOM DIA
        img.src = 'fotomanha.png'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora <= 18) {
        //BOA TARDE
        img.src = 'fototarde.png'
        document.body.style.background = '#b9846f'
    } else {
        //FOTO NOITE
        img.src = 'fotonoite.png'
        document.body.style.background = '#122426'
    }
}
/**
 * Após criar essa função, vai no HTML no body e inicializa a function carregar()
 */