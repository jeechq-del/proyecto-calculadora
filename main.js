function principal() {
    console.log("¡Hola, estudiantes!");
    console.log("Suma de [5, 7, 9]:", sumarMultiplesNumeros([5, 7, 9]));
    console.log("Producto de [4, 5, 6, 7]:", multiplicarMultiplesNumeros([4, 5, 6, 7]));
    console.log("¿6 es par?", esPar(6));
    console.log("¿7.3 es entero?", esEntero(7.3));
}

function sumarMultiplesNumeros(numeros) {
    let suma = 0;
    for (let i = 0; i < numeros.length; i++) {
        suma = suma + numeros[i];
    }
    return suma;
}

function multiplicarMultiplesNumeros(numeros) {
    let producto = 1;
    for (let i = 0; i < numeros.length; i++) {
        producto = producto * numeros[i];
    }
    return producto;
}

function esPar(numero) {
    return Number.isInteger(numero) && numero % 2 === 0;
}

function esEntero(numero) {
    return Number.isInteger(numero);
}

// Exportar funciones para pruebas (estilo Node.js)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        sumarMultiplesNumeros,
        multiplicarMultiplesNumeros,
        esPar,
        esEntero
    };
}

// Ejecutar la función principal si este archivo se ejecuta directamente
if (require.main === module) {
    principal();
}
