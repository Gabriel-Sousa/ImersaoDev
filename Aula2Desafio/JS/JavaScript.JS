const pokemon = "Kingler";
const botao = document.querySelector("button")

const input = document.querySelector("input");


function verificaPokemon() {
    const chute = input.value;

    if(pokemon == chute){
        input.value = "Parabéns você acertou!!!!"
    }else{
        input.value = "Você Errouuuuuuuu"
    }
}

botao.onclick = verificaPokemon