//1- Crear una función que reciba un número por parámetro e indique en consola si el número es par o impar.

function indicarParImpar(numero) {
    if (numero % 2 === 0) {
        console.log(numero + " es un número par");
    } else {
        console.log(numero + " es un número impar");
    }
}

indicarParImpar(5); 
indicarParImpar(10);

//2- Crear una función que reciba dos números por parámetro e indique en consola que número es mayor, y si ninguno lo es, indicar por consola que son iguales.

function indicarNumeroMayor(num1, num2) {
    if (num1 > num2) {
        console.log(num1 + " es mayor que " + num2);
    } else if (num2 > num1) {
        console.log(num2 + " es mayor que " + num1);
    } else {
        console.log("Ambos números son iguales");
    }
}

indicarNumeroMayor(5, 10); 
indicarNumeroMayor(10, 5); 
indicarNumeroMayor(5, 5);

//3- Crear una función que reciba un número por parámetro e indique en consola si ese número es múltiplo de 5.

function verificarMultiploDeCinco(numero) {
    if (numero % 5 === 0) {
        console.log(numero + " es múltiplo de 5");
    } else {
        console.log(numero + " no es múltiplo de 5");
    }
}

verificarMultiploDeCinco(10); 
verificarMultiploDeCinco(7);

//4- Crear una función que reciba un número por parámetro e imprima por consola todos los números desde el 0 hasta llegar a ese número.

function imprimirNumeros(numero) {
    for (let i = 0; i <= numero; i++) {
        console.log(i);
    }
}

imprimirNumeros(5);

//5 - Crear una función que reciba una palabra y un número por parámetro e imprima por consola  esa palabra la cantidad correspondiente al número indicado.

function palabraRepetida(palabra, cantidad) {
    for (let i = 0; i < cantidad; i++) {
        console.log(palabra);
    }
}

palabraRepetida("Hola", 3);

//6 - Crear una función que reciba un array por parámetro e imprima por consola todos los valores de ese array.

const miArray = [1, 2, 3, 4, 5];

function imprimirArray(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}

imprimirArray(miArray);

//7 - Crear una función que reciba un array con 10 números e imprima por consola todos los valores de ese array, menos el que se encuentre en la 5ta posición del mismo. Ayuda: Recuerden que el primer índice de un array es "0".

const otroArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function imprimirArraySinQuinto(array) {
    for (let i = 0; i < array.length; i++) {
        if (i !== 4) {
            console.log(array[i]);
        }
    }
}

imprimirArraySinQuinto(otroArray);

//8 - Crea una función que reciba un array de números y un número por parámetro e imprima por consola cada número del array multiplicado por el número pasado por parámetro.

const tercerArray = [1, 2, 3, 4, 5];
const multiplicador = 2;

function multiplicarArrayPorNumero(array, multiplicador) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i] * multiplicador);
    }
}

multiplicarArrayPorNumero(tercerArray, multiplicador);