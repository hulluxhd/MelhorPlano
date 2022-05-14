const str = "(coder)[byte)]";

function SearchingChallenge(str) {

  // função de callback a ser chamada pelo objeto. Faz uma procura pela string passada por parâmetro 
  // e conta a sua quantidade  
  function split(str, search) {
    let counter = 0;
    for (i = 0; i < str.length; i++) {
      if (str[i] === search) {
        counter++;
      }
    }
    return counter;
  }

  // objeto que guarda as informações
  const info = {
    pLeft: split(str, "("),
    pRight: split(str, ")"),
    cLeft: split(str, "["),
    cRight: split(str, "]"),
  };
  // a lógica principal está aqui. Se a quantidade de parênteses ou colchetes esquerdo for
  // diferente de seus pares à direita, retorna zero. Senão, significa que há "match" entre as 
  // informações e basta apenas somar suas ocorrências.
  if (info.pLeft !== info.pRight || info.cLeft !== info.cRight) return "0";
  else return `1 ${info.pLeft + info.cLeft}`;
}

console.log(SearchingChallenge(str));
