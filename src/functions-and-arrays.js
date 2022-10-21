
// Iteration #1: Find the maximum
function maxOfTwoNumbers(valor1,valor2) {
  return valor1 > valor2 ? valor1 : valor2;
}



// Iteration #2: Find longest word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];

function findLongestWord(palavras) {

  if ( palavras.length == 1 ) return palavras[0];
  let tamanhoPalavraMaior = -1;
  let indiceMaiorPalavra = -1;
  for ( let i = 0; i < palavras.length ; i++ ) {
    if ( palavras[i].length > tamanhoPalavraMaior ) {
       tamanhoPalavraMaior = palavras[i].length;
       indiceMaiorPalavra = i;
    }
  }
  
  // // crio um array com todas as palavras que tem o mesmo número de caracteres
  // // do maior comprimento existente no array
  let novaMatriz01 = palavras.filter(texto => texto.length == tamanhoPalavraMaior );
  
  // // crio um array com o número de ocorrência de cada palavra
  // // (considerando apenas as palavras que tem o comprimento igual ao maior encontrado)
  let novaMatriz02 = novaMatriz01.map(texto => (novaMatriz01.filter(x => x == texto)).length );

  // // insere na variável maiorocorrencias o maior número encontrado no array novaMatriz02
  let maiorOcorrencias = novaMatriz02.reduce(function(a, b) { return Math.max(a, b); }, -Infinity);
  
  // // busca em novaMatriz02 qual é o índice do dado que representa "maiorocorrencias"
  let indiceMaiorOcorrencia = novaMatriz02.findIndex(texto => texto == maiorOcorrencias);
  
   // // se o maior número de letras for igual, em várias palavras, retorna a palvra que mais ocorreu
  if ( novaMatriz01.length > 1 ) return novaMatriz01[indiceMaiorOcorrencia];

  return palavras[indiceMaiorPalavra] ? palavras[indiceMaiorPalavra] : null;

}



// Iteration #3: Calculate the sum
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numeros) {
  let soma = 0;
  for (let i = 0; i < numeros.length; i++ ) {
    soma += numeros[i];
  }
  return soma;
}

// Iteration #3.1 Bonus:
function sum(elementos) {
  if ( elementos.length == 0 ) return 0;
  let soma = 0;
  for ( let i = 0; i < elementos.length; i++ ) {
      switch (typeof elementos[i]) {
        case 'string':
          soma += elementos[i].length;
          break;
        case 'boolean':
          if ( elementos[i] == true ) soma += 1;
          break;
        case 'number':
          soma += elementos[i];
          break;
        default:
          console.log("passou aqui - 001");
          console.log(typeof elementos[i]);
          console.log("passou aqui - 002");

          throw new Error( "Unsupported data type sir or ma'am");
          break;
      }
  }
  return soma;
}



// Iteration #4: Calculate the average
// Level 1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(matrizNumeros) {
  return matrizNumeros === null || matrizNumeros.length == 0  ? null : sumNumbers(matrizNumeros) / matrizNumeros.length;
}


// Level 2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];

function averageWordLength(palavras) { 
  return averageNumbers(palavras.map(texto => texto.length ));
}

// Bonus - Iteration #4.1
function avg(elementos) {
  if ( elementos.length == 0 ) return null;
  return sum(elementos) / elementos.length;
}

// Iteration #5: Unique arrays
const wordsUnique = [
  'crab',
  'poison',
  'contagious',
  'simple',
  'bring',
  'sharp',
  'playground',
  'poison',
  'communion',
  'simple',
  'bring'
];

function uniquifyArray(palavras) {
  if ( palavras.length == 0  ) return null;
  let novoArray = palavras.filter( (element, index, array) => index < 1 || 0 == (array.slice(0,index).filter(x => x == element)).length );
  if ( novoArray.length == palavras.length ) return palavras;
  return novoArray;
}



// Iteration #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];

function doesWordExist(lista, palavra) {
    if ( lista.length == 0 ) return null;
    return lista.filter( x => x == palavra).length == 0 ? false : true;
}



// Iteration #7: Count repetition
const wordsCount = [
  'machine',
  'matter',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'matter',
  'truth',
  'disobedience',
  'matter'
];

function howManyTimes(lista, palavra) {
  if ( lista.length == 0 ) return 0;
  return (lista.filter(x => x == palavra)).length;
}



// Iteration #8: Bonus
const matrix = [
  [8, 2, 22, 97, 38, 15, 0, 40, 0, 75, 4, 5, 7, 78, 52, 12, 50, 77, 91, 8],
  [49, 49, 99, 40, 17, 81, 18, 57, 60, 87, 17, 40, 98, 43, 69, 48, 4, 56, 62, 0],
  [81, 49, 31, 73, 55, 79, 14, 29, 93, 71, 40, 67, 53, 88, 30, 3, 49, 13, 36, 65],
  [52, 70, 95, 23, 4, 60, 11, 42, 69, 24, 68, 56, 1, 32, 56, 71, 37, 2, 36, 91],
  [22, 31, 16, 71, 51, 67, 63, 89, 41, 92, 36, 54, 22, 40, 40, 28, 66, 33, 13, 80],
  [24, 47, 32, 60, 99, 3, 45, 2, 44, 75, 33, 53, 78, 36, 84, 20, 35, 17, 12, 50],
  [32, 98, 81, 28, 64, 23, 67, 10, 26, 38, 40, 67, 59, 54, 70, 66, 18, 38, 64, 70],
  [67, 26, 20, 68, 2, 62, 12, 20, 95, 63, 94, 39, 63, 8, 40, 91, 66, 49, 94, 21],
  [24, 55, 58, 5, 66, 73, 99, 26, 97, 17, 78, 78, 96, 83, 14, 88, 34, 89, 63, 72],
  [21, 36, 23, 9, 75, 0, 76, 44, 20, 45, 35, 14, 0, 61, 33, 97, 34, 31, 33, 95],
  [78, 17, 53, 28, 22, 75, 31, 67, 15, 94, 3, 80, 4, 62, 16, 14, 9, 53, 56, 92],
  [16, 39, 5, 42, 96, 35, 31, 47, 55, 58, 88, 24, 0, 17, 54, 24, 36, 29, 85, 57],
  [86, 56, 0, 48, 35, 71, 89, 7, 5, 44, 44, 37, 44, 60, 21, 58, 51, 54, 17, 58],
  [19, 80, 81, 68, 5, 94, 47, 69, 28, 73, 92, 13, 86, 52, 17, 77, 4, 89, 55, 40],
  [4, 52, 8, 83, 97, 35, 99, 16, 7, 97, 57, 32, 16, 26, 26, 79, 33, 27, 98, 66],
  [88, 36, 68, 87, 57, 62, 20, 72, 3, 46, 33, 67, 46, 55, 12, 32, 63, 93, 53, 69],
  [ 4, 42, 16, 73, 38, 25, 39, 11, 24, 94, 72, 18, 8, 46, 29, 32, 40, 62, 76, 36],
  [20, 69, 36, 41, 72, 30, 23, 88, 34, 62, 99, 69, 82, 67, 59, 85, 74, 4, 36, 16],
  [20, 73, 35, 29, 78, 31, 90,  1, 74, 31, 49, 71, 48, 86, 81, 16, 23, 57, 5, 54],
  [ 1, 70, 54, 71, 83, 51, 54, 69, 16, 92, 33, 48, 61, 43, 52, 1, 89, 19, 67, 48]
];

function greatestProduct(matrix) {

  maxlin = matrix.length;
  maxcol = matrix[0].length;
  melhor = { linha: 0, coluna: 0, produto : 0, padrao : "" };

  for (let l = 0 ; l < maxlin - 3 ; l++ ) {
      for ( let c = 0 ; c < maxcol - 3 ; c++ ) {
          let prodTempH = matrix[l][c] * matrix[l][c+1] * matrix[l][c+2] * matrix[l][c+3];
          if ( prodTempH > melhor.produto ) {
               melhor.linha = l;
               melhor.coluna = c;
               melhor.produto = prodTempH;
               melhor.padrao = "L";
          }
          let prodTempV = matrix[l][c] * matrix[l+1][c] * matrix[l+2][c] * matrix[l+3][c];
          if ( prodTempV > melhor.produto ) {
               melhor.linha = l;
               melhor.coluna = c;
               melhor.produto = prodTempV;
               melhor.padrao = "C";
          }
      }
  }
  
  for (let l = 0 ; l < maxlin ; l++ ) {
      let prodTempH = matrix[l][maxcol-1] * matrix[l][maxcol-2] * matrix[l][maxcol-3] * matrix[l][maxcol-4];
      if ( prodTempH > melhor.produto ) {
           melhor.linha = l;
           melhor.coluna = maxcol;
           melhor.produto = prodTempH;
           melhor.padrao = "L";
      }
  }

  for (let c = 0 ; c < maxcol ; c++ ) {
    let prodTempV = matrix[maxlin-1][c] * matrix[maxlin-2][c] * matrix[maxlin-3][c] * matrix[maxlin-4][c];
    if ( prodTempV > melhor.produto ) {
         melhor.linha = maxlin;
         melhor.coluna = c;
         melhor.produto = prodTempV;
         melhor.padrao = "C";
    }
}

return melhor.produto;

}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    maxOfTwoNumbers,
    findLongestWord,
    sumNumbers,
    sum,
    averageNumbers,
    averageWordLength,
    avg,
    uniquifyArray,
    doesWordExist,
    howManyTimes,
    greatestProduct
  };
}
