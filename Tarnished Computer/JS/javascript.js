var ligada = 0;

function mostrarlink() {
    if (ligada == 0) {
        window.document.getElementById("mago").src = "image/escritorio.jpg"
        ligada = 1
    } else {
        window.document.getElementById("mago").src = "image/mago.png"
        ligada = 0
    }
}

function apresentarNome() {
    var NOME = window.prompt("Qual o seu nome?")


    alert("Seja bem-vindo, " + NOME)
}

function realizarCadastro() {
    var nome = window.document.getElementById("nome").value
    var email = window.document.getElementById("email").value

    alert("Cadastro realizado. Bem-vindo, " + nome + email)
}