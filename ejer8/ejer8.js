// En un montallantas se ofrece un descuento del 20% sobre el valor de cada llanta si el número de llantas no supera las 10, de lo contrario tiene un descuento del 50%. Se pide desarrollar un algoritmo que lea el número de llantas y el valor de cada llanta. Calcular el valor de la compra y el valor total después del descuento.

const NumeroLlantas = parseInt(prompt("Ingrese el número de llantas"));

const ValorLlanta = parseInt(prompt("Ingrese el valor de cada llanta"));

const ValorCompra = NumeroLlantas * ValorLlanta;


if (NumeroLlantas <= 10) {
    console.log(`El valor de la compra es: ${ValorCompra}`);
    console.log(`El valor total después del descuento es: ${ValorCompra * 0.80}`);
}else{
    console.log(`El valor de la compra es: ${ValorCompra}`);
    console.log(`El valor total después del descuento es: ${ValorCompra * 0.50}`);
}