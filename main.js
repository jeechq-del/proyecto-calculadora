function principal() {
  console.log("¡Hola, estudiantes!");
  esEntero(3);
  esPar(6);
  sumarMultiplesNumeros([5, 7, 9]);
  multiplicarMultiplesNumeros([4, 5, 6]);
}

// Funciones requeridas para la calificación automática
function sumarMultiplesNumeros(numeros) {
  let suma = 0;
  for (let i = 0; i < numeros.length; i++) {
    suma = suma + numeros[i]; // va sumando cada número
  }
  return suma;
}

function multiplicarMultiplesNumeros(numeros) {
  let multiplicacion = 1;
  for (let i = 0; i < numeros.length; i++) {
    multiplicacion = multiplicacion*numeros[i]; // va sumando cada número
  }
  return multiplicacion;
}

function esPar(numero) {
  let residuo = numero % 2;
  if (Number.isInteger(numero) && residuo === 0) {
    return true;
  } else {
    return false;
  }
}

function esEntero(numero) {
  return Number.isInteger(numero);
  // Debe devolver true si el número es un entero, false en caso contrario
}

// Exportar funciones para pruebas (estilo Node.js)
if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    sumarMultiplesNumeros,
    multiplicarMultiplesNumeros,
    esPar,
    esEntero,
  };
}

// Ejecutar la función principal si este archivo se ejecuta directamente
if (require.main === module) {
  principal();
}
