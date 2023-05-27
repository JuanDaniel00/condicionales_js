// Programa que lea un número por pantalla e indique si el número leído está comprendido entre 10 y 50

const Numero = parseInt(prompt("Ingrese un número"));

if (Numero >= 10 && Numero <= 50) {
    console.log(`El ${Numero} está comprendido entre 10 y 50`);
}else{
    console.log(`El ${Numero} no está comprendido entre 10 y 50`);
}