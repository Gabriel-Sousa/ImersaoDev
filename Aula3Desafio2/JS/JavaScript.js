var numeroSecreto = parseInt(Math.random() * 11)
var tentativas = 3

function chute(){
    var valorInput = document.querySelector("input").value
    var h2 = document.querySelector("h2")
    

    if(numeroSecreto == valorInput){
        h2.textContent = "Acertou!!!"
        h2.style.backgroundColor = "#008000"
    }else{
        h2.textContent = "Você tentou usar o número " + valorInput + " e errou!!!"
        h2.style.backgroundColor = "#ff0000"
    }

}

document.querySelector("button").addEventListener("click",chute)
