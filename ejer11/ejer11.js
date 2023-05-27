// Calcular el peso equivalente en Gramos de una fruta que tiene un peso no conocido en Kilogramos, sólo si el peso sobrepasa los 5 kilogramos, de lo contrario calcular el equivalente en onzas. 16 onzas son una libra. 2 libras son 1 kilogramo. Un kilogramo son 1000 gramos.

const Peso = parseInt(prompt("Ingrese el peso de la fruta (Kg)"));

if (Peso > 5) {
    console.log(`El peso en gramos es: ${Peso * 1000}g`);
}else{
    console.log(`El peso en onzas es: ${Peso * 32}oz`);
}