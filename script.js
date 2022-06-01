/*alert('Olá!') - é só um teste*/
/**
 * Passo 1 - criar uma funcion carregar
 */
function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //BOM DIA
        img.src = 'fotomanha.png'
    } else if (hora >= 12 && hora < 18) {
        //BOA TARDE
        img.scr = 'fototarde.png'
    } else {
        img.src = 'fotonoite'
    }
}
/**
 * Após criar essa função, vai no HTML no body e inicializa a function carregar()
 */