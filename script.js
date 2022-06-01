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
}
/**
 * Após criar essa função, vai no HTML no body e inicializa a function carregar()
 */