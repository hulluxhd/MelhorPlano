const array = [5, 5, 2, 2, 1];

function ArrayChallenge(arr) {
  // cópia do array que está chegando na função
  let arrCopy = arr.slice(0);

  // contador da "moda"
  let modeCounter = 1;
  // moda
  let mode = -1;

  // esse while tem a função de isolar os números e fazer a sua contagem em separado.
  while (arrCopy.length > 0) {
    // pega o primeiro elemento do array
    num = arrCopy[0];
    // o contador: filtra os elementos que são iguais e faz a sua contagem
    numCounter = arrCopy.filter((el) => el === num).length;
    // se o numero da contagem acima for maior que o número da 'moda', altera o valor da 'moda'
    if (numCounter > modeCounter) {
      mode = num;
      modeCounter = numCounter;
    }
    // por fim, elimina o primeiro número do array. Considerei que o ideal seria tirar TODOS os elementos
    // iguais ao fim da iteração mas também percebi que, afinal, não impacta no algoritmo, pois se
    // seu contador já for o contador da 'moda', a 'moda' não vai ser alterada
    arrCopy.shift();
  }

  return mode;
}

console.log(ArrayChallenge(array));
