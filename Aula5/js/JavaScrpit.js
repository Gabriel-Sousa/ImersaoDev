function adicionarFilme(){
    var campo = document.querySelector("#filme")
    var campovalor = campo.value
    if(campovalor.endsWith('.jpg')){
        var img = "<img src=" + campovalor + ">"
        var listaFilmes= document.querySelector("#listaFilmes")
        listaFilmes.insertAdjacentHTML('beforeend', img)
    }else{
        alert("Imagem invalida")
    }
    campo.value =''
    //listaFilmes.innerHTML = listaFilmes.innerHTML + img
    //console.log(input)
    //console.log(listaFilmes)   
}


// linha 2 - Pega o valor dentro do input quando clicar no botao adicionar filme
// linha 3 - Ele transforma o valor do input(linha 2) para um tag de html 
// linha 4 - Ele seleciona o elemento com id =  "listaFilmes" no html e deixa armazenado




// linha * - Ele pega a linha 4 mais o innerHTML para troca o texto depois do igual que no caso foi convertido para um tag de HTML
// innerHTML - ele tenta escrever algo em html exemplo caso exista uma tag em html na string depois do = ele tenta escrever no html
// innerText - ele troca o texto não interpretar tags
// O innerHTML tem problema de segurança
