// Calcular una suma puede ser tan simple como iterar sobre un array y sumar cada uno de los elementos. Implemente la función denominada sumNumbers que toma un array de números como argumento y devuelve la suma de todos los números de la matriz. 
const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumAll(params) {
    let sum = 0;
    for (let i = 0; i < params.length; i++) {
      sum += params[i];
    }
    return console.log(sum);
  }

  sumAll(numbers);

  const numbers2 = [1, 6, 3, 60, 45, 50, 58];
  sumAll(numbers2);

