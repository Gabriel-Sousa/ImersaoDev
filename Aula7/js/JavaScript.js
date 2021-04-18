var carta1 = {
    nome: "Jubileu",
    atributos:{
        Ataque: 70,
        Defesa: 40,
        Mana: 60
    }
}
var carta2 = {
    nome: "Josoares",
    atributos:{
        Ataque: 80,
        Defesa: 40,
        Mana: 80
        }  
}
var carta3 = {
    nome: "Irineu",
    atributos:{
        Ataque: 99,
        Defesa: 99,
        Mana: 99
    } 
}

var cartas = [carta1, carta2, carta3]
var cartaMaquina
var cartaJogador

function sortearCarta(){
    var numeroCartaMaquinas = parseInt(Math.random()*3)
    cartaMaquina = cartas[numeroCartaMaquinas]
    // console.log(cartaMaquina)

    var numeroCartaJogador = parseInt(Math.random()*3)
    while(numeroCartaJogador == numeroCartaMaquinas){
        numeroCartaJogador = parseInt(Math.random()*3)
    }
    cartaJogador = cartas[numeroCartaJogador]
    console.log(cartaJogador)
    document.getElementById('btnSortear').disabled = true
    document.getElementById('btnJogar').disabled = false
    exibirOpcoes()
}

function exibirOpcoes(){
    var opcoes = document.getElementById("opcoes")
    var opcoesTexto = ""
    for (var atributo in cartaJogador.atributos) {
        opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo
    }
    opcoes.innerHTML = opcoesTexto
}


function obemAtributoSelecionado(){
    var radioAtributos = document.getElementsByName("atributo")
    for (var i = 0; i < radioAtributos.length; i++) {
        if(radioAtributos[i].checked){
            return radioAtributos[i].value
        }
    }
}

function jogar(){
    var atributoSelecionado = obemAtributoSelecionado()

    if(cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]){
        alert("Venceu a máquina. A carta do usuário era " + atributoSelecionado + ": " + cartaJogador.atributos[atributoSelecionado] + " e da Maquina era de " + atributoSelecionado + ": " +cartaMaquina.atributos[atributoSelecionado] )
    }else if(cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]){
        alert("Perdeu para a máquina. Carta da máquina é maior, O atributo do usuário era de " + atributoSelecionado + ": " + cartaJogador.atributos[atributoSelecionado] + " e da Maquina era de "+ atributoSelecionado+ ": "+ cartaMaquina.atributos[atributoSelecionado])
    }else{
        alert("Empatou!!!. O atributo do usuário era de " + atributoSelecionado + ": " + cartaJogador.atributos[atributoSelecionado]  + " e da Maquina era de " + atributoSelecionado + ": " + cartaMaquina.atributos[atributoSelecionado] )
    }
}
    

