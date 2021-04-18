var gabriel = { 
    nome: "Gabriel",
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos: 0
}
var jubileu = { 
    nome: "Jubileu",
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos: 0
}

// Esses comandos são so utilizado para calcular os pontos quando ja tem algum valor  nas variaveis gabriel e jubileu 
// gabriel.pontos = calculaPontos(gabriel)
// jubileu.pontos = calculaPontos(jubileu)

function calculaPontos(jogador){
    var pontoscalculo =  (jogador.vitorias * 3) + jogador.empates
    return pontoscalculo
}

var jogadores = [gabriel, jubileu]

function exibirJogadoresNaTela(jogadores){
    var html = ""
    for(var i = 0; i < jogadores.length; i++){
        html += "<td>" + jogadores[i].nome + "</td>"
        html += "<td>" + jogadores[i].vitorias + "</td>"
        html += "<td>" + jogadores[i].empates + "</td>"
        html += "<td>" + jogadores[i].derrotas + "</td>"
        html += "<td>" + jogadores[i].pontos + "</td>"
        html += "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>"
        html += "<td><button onClick='adicionarEmpate("+ i +")'>Empate</button></td>"
        html += "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td></tr>"
        // html += "<td>" + jogadores[i].pontos + "</td></tr>" 
        // significa html = html + "<td>" + jogadores[i].pontos + "</td></tr>"
    }
    var tabelaJogadores = document.getElementById("tabelaJogadores")
    tabelaJogadores.innerHTML = html
}

exibirJogadoresNaTela(jogadores)

function adicionarVitoria(i){
    var jogador = jogadores[i]
    jogador.vitorias++ 
    jogador.pontos = calculaPontos(jogador)
    exibirJogadoresNaTela(jogadores)
}

function adicionarEmpate(i){
    for(var i = 0; i < jogadores.length; i++){
        var jogador = jogadores[i]
        jogador.empates++
        jogador.pontos = calculaPontos(jogador)
    }
    exibirJogadoresNaTela(jogadores)
}

function adicionarDerrota(i){
    var jogador = jogadores[i]
    jogador.derrotas++ 
    exibirJogadoresNaTela(jogadores)
}

//              TESTE
// 
// function adicionarEmpate(i){
//     var jogador = jogadores[i]
//     console.log(jogador)
//     jogador.empates++ 
//     jogador.pontos = calculaPontos(jogador)
//     exibirJogadoresNaTela(jogadores)
// }

