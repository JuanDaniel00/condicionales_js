// Desarrolle un algoritmo que lea el valor del pasaje y el número de pasajeros que abordarán un microbús. Calcular el valor total a pagar. Además, imprima un mensaje que diga si tiene sobre cupo o no. Tenga en cuenta que a un microbús le caben 20 pasajeros

const ValorPasaje = parseInt(prompt("Ingrese el valor del pasaje"));
const NumeroPasajeros = parseInt(prompt("Ingrese el número de pasajeros"));
const ValorTotal = ValorPasaje * NumeroPasajeros;

if (NumeroPasajeros > 20) {
    console.log(`El valor total a pagar es: ${ValorTotal}`);
    console.log(`El microbus tiene sobre cupo`);
} else {
    console.log(`El valor total a pagar es: ${ValorTotal}`);
    console.log(`El microbus no tiene sobre cupo`);
}
