//if = se
//else = senão
//else if = senão se
//escrevendo na tecla - document.write()
//concatenação(juntar palavra com variáveis) - ("palavra" + variável)
// == - comparaçãp é diferente do = que usamos para fazer atribuição


var primeirovalor = parseFloat(prompt("Digite o primeiro valor:"))
var segundovalor = parseFloat(prompt("Digite o segundo valor:"))
var operacao = prompt("Digite o 1 para fazer uma soma, 2 para subtração, 3 para multiplicação, 4 para divisão ")

if(operacao == 1){
    var resultado = primeirovalor + segundovalor
    document.write("<h2>" + primeirovalor + " + " + segundovalor + " = " + resultado + "</h2>")
}else if (operacao == 2){
    var resultado = primeirovalor - segundovalor
    document.write("<h2>" + primeirovalor + " - " + segundovalor + " = " + resultado + "</h2>")
}else if (operacao == 3){
    var resultado = primeirovalor * segundovalor
    document.write("<h2>" + primeirovalor + " X " + segundovalor + " = " + resultado + "</h2>")
}else if (operacao == 4){
    var resultado = primeirovalor / segundovalor
    document.write("<h2>" + primeirovalor + " / " + segundovalor + " = " + resultado + "</h2>")
}else{
    document.write("<h2>Opção inválida</h2>")
}