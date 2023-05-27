// Una persona ingresa a un gimnasio pesando una cantidad desconocida. Luego de una sesión de trabajo redujo su peso en un 10%, posteriormente, asistió a una última sesión en la que rebajó 18.5%. En un período de 8 días de inactividad aumentó un 3% de su peso. Calcular e imprimir cada una de las disminuciones, el aumento y el peso actual de esa persona, además imprima si tiene sobrepeso o no. Nota: El límite es hasta 78 kg).

const Peso = parseInt(prompt("Ingrese su peso (Kg)"));

const PesoDismin1 = (Peso * 0.10).toFixed(2);
console.log(`La disminución del 10% es: ${PesoDismin1}Kg`);

const Peso2Dismin2 = (PesoDismin1 * 0.185).toFixed(2);
console.log(`La disminución del 18.5% es: ${Peso2Dismin2}Kg`);

const PesoAumento = (Peso2Dismin2 * 0.03).toFixed(2);
console.log(`El aumento del 3% es: ${PesoAumento}Kg`);

const PesoActual = parseInt(Peso - PesoDismin1 - Peso2Dismin2 + PesoAumento).toFixed(2);

if (PesoActual > 78) {
    console.log(`El peso actual es: ${PesoActual}Kg`);
    console.log(`Tiene sobrepeso`);
}else{
    console.log(`El peso actual es: ${PesoActual}Kg`);
    console.log(`No tiene sobrepeso`);
}
