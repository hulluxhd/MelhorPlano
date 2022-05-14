// apesar de ser simples, confesso que esse desafio me quebrou um pouco a cabeça. Só consegui resolver quando
// respirei um pouco e quebrei o problema em pedaços. Muito divertido de finalizar :D

const array = ["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"];

function ArrayChallenge(strArray) {
  // separando os elementos dos arrays
  let array = strArray.map((el) => {
    return Array.of(el);
  });


  // como o desafio afirma que sempre serão dois itens no array original, separei-os 
  // primeiro, é necessário transformar o array gerado a partir do map em string. 
  // segundo, retirar todas as vírgulas.
  // terceiro, quebrar a string nos espaços para gerar um novo array de itens
  // quarto, pegar esse array de itens e transformá-lo em int, para facilitar o manuseio de dados
  let arrayNumbers1 = 
    array[0]
    .toString()
    .replaceAll(",", "")
    .split(" ")
    .map((e) => parseInt(e));

  let arrayNumbers2 = 
    array[1]
    .toString()
    .replaceAll(",", "")
    .split(" ")
    .map((e) => parseInt(e));

  // array que guardará os elementos iguais
  let arrayNumbersMatch = [];


  // uma matriz que percorrerá todos os itens e, se algum elemento for duplicado entre os arrays, faz 
  // uma adição ao array de 'match'
  for (i = 0; i < arrayNumbers1.length; i++) {
    for (j = 0; j < arrayNumbers2.length; j++) {
      if (arrayNumbers1[i] === arrayNumbers2[j])
        arrayNumbersMatch.push(arrayNumbers1[i]);
    }
  }

  return arrayNumbersMatch.length > 0 ? arrayNumbersMatch.toString() : "false";
}

console.log(ArrayChallenge(array));
