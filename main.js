function principal() {
  console.log("¡Hola, estudiantes!");
  esEntero(3);
  esPar(6);
  sumarMultiplesNumeros([5,7,9]); 
  multiplicarMultiplesNumeros([4,5,6]);
}

// Funciones requeridas para la calificación automática
function sumarMultiplesNumeros(numeros) { 
  const a = numeros[0];
  const b = numeros[1];
  const c = numeros[2];

  const suma = a + b + c; 
  console.log(suma);
}

function multiplicarMultiplesNumeros(numeros) {
  
  const a = numeros[0];
  const b = numeros[1];
  const c = numeros[2];
  const multiplicacion= a*b*c
  console.log(multiplicacion);
}

function esPar(numero) {
  
  let residuo = numero % 2;
  if (Number.isInteger(numero) && residuo === 0 ) {
    console.log(true)
  } else {
    console.log(false)
  }

}

function esEntero(numero) {
  console.log(Number.isInteger(numero));
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
