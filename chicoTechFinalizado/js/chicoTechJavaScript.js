var ligada = 0;

function ligarLampada(){
    if(ligada == 0){
        window.document.getElementById("lampada").src="imagens/lampadaLigada.jpeg"
        ligada = 1
    }else{
        window.document.getElementById("lampada").src="imagens/lampada.jpg"
        ligada = 0
    }
}

function apresentarNome(){
    var nome = window.prompt("Qual o seu nome?")


    alert("Seja bem-vindo, " + nome)
}

function realizarCadastro(){
    var nome = window.document.getElementById("nome").value
    var email = window.document.getElementById("email").value
    var cpf = window.document.getElementById("cpf").value

    alert("Cadastro realizado. Bem-vindo, " + nome + " com CPF " + cpf + " e email " + email)
}

function dataAtual(){
    const data = new Date();

    document.getElementById("data").innerHTML = data
}