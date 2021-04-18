var imdbFilmes = []
var imgFilmes = []
var nomeFilmes = []


imdbFilmes.push("https://www.imdb.com/title/tt9140554/")
imdbFilmes.push("https://www.imdb.com/title/tt5034838/")
imdbFilmes.push("https://www.imdb.com/title/tt2034800/")

imgFilmes.push("https://m.media-amazon.com/images/M/MV5BOGU0OWQyMjItYzA4Zi00MDFiLThiZWQtZmEyNWRiODAzYzNmXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX182_CR0,0,182,268_AL_.jpg")
imgFilmes.push("https://m.media-amazon.com/images/M/MV5BZmYzMzU4NjctNDI0Mi00MGExLWI3ZDQtYzQzYThmYzc2ZmNjXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_UX182_CR0,0,182,268_AL_.jpg")
imgFilmes.push("https://m.media-amazon.com/images/M/MV5BMjA3MjAzOTQxNF5BMl5BanBnXkFtZTgwOTc5OTY1OTE@._V1_UX182_CR0,0,182,268_AL_.jpg")

nomeFilmes.push("Loki")
nomeFilmes.push("Godzilla vs. Kong")
nomeFilmes.push("A Grande Muralha")


//console.log(imgFilmes)
//console.log(nomefilme)
//console.log(imdbFilmes)
//console.log(filmes.length)

for (var i = 0; i < imgFilmes.length; i++) {
  document.write("<div class='itens'>", "<a href=", imdbFilmes[i], " target='_blank' >", "<img class='cartazes' src=" + imgFilmes[i] + ">", "<h2 class='nomes'>", nomeFilmes[i], "</h2>", "</a>", "</div>");
}


// i = i - 1 
// é a mesma coisa
// i--

//i = i + 1
// é a mesma coisa
//i++

/*
var tentativas = 3
while(tentativas > 0){
    
    tentativas = tentativas - 1
    
}
*/

/*
for (var i = 0; i < filmes.length; i++){
    
    document.write("<img src=" + filmes[i] + ">" , "<p>" + nomeFilmes[i] + "</p>")
}
*/
