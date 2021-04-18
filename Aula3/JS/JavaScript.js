// while - enquanto

var numeroSecreto = parseInt(Math.random() * 10)
var tentativas = 3


function validaFormulario(){
    while (tentativas>0){
    var input = document.querySelector("#valor")
    var valor = parseInt(input.value)
        if(numeroSecreto == valor){
        alert("Acertou")
        
    break;
    } else if(valor > numeroSecreto){
        alert("O numero que você digitou é maior que o número secreto")
        tentativas = tentativas -1
        break;
    }else if(valor < numeroSecreto ){
        alert("O numero que  você digitou é menor que o numero secreto")
        tentativas = tentativas -1
        break;
    }
    }

    if (tentativas ==0){
    alert("Suas tentativas acabaram, o número secreto era: " + numeroSecreto)
    }
 }