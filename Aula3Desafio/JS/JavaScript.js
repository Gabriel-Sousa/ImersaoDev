var numeroSecreto = parseInt(Math.random() * 11)
var tentativas = 3 

function jogosecreto(){
    
    var chute = document.querySelector("input").value
    while(tentativas > 0){
        if(chute == numeroSecreto){
            alert("Acertou")
            break;
        } else if(chute > numeroSecreto){
            alert("O número que você digitou é maior que o número secreto")
            tentativas = tentativas -1
            break;
        } else if(chute < numeroSecreto){
            alert("O número que  você digitou é menor que o número secreto")
            tentativas = tentativas -1
            break;
        }
    }
    if(tentativas == 0){
        alert("Suas tentativas acabaram, o número secreto era: " + numeroSecreto)
    }
    
}
