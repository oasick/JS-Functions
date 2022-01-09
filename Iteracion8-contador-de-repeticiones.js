// Crea una función que reciba por parámetro un array y el valor que desea comprobar que existe dentro de dicho array - comprueba si existe el elemento, en caso que existan nos devuelve un true y la posición de dicho elemento y por la contra un false. Puedes usar este array para probar tu función:


const counterWords = [
  'code',
  'repeat',
  'eat',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code',
  'enjoy',
  'upgrade',
  'code'
];
function repeatCounter(param) {
  let counter = {};
  for (let i = 0; i < param.length; i++) {
    if (param[i] in counter) {
      counter[param[i]]++;
    } else {
      counter[param[i]] = 1;
    }
  }
  return console.log(counter);
}

repeatCounter(counterWords);