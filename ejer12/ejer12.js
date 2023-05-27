// El peso de un vehículo (en toneladas) se redujo en un 15% luego de hacerle unas reparaciones. Se pide calcular el peso actual luego de la reducción. Por último se pide calcular el equivalente en kilogramos y en gramos de ese peso actual. Si la reducción es mayor a 3½ toneladas imprima un mensaje “El vehículo quedó liviano”.

const Peso = parseInt(prompt("Ingrese el peso del vehículo (toneladas)"));
const Reduccion = Peso * 0.15;
const PesoActual = Peso - Reduccion;

console.log(`El peso actual es: ${PesoActual} toneladas`);
console.log(`El peso actual en kilogramos es: ${PesoActual * 1000} kg`);
console.log(`El peso actual en gramos es: ${PesoActual * 1000000} g`);

if (Reduccion > 3.5) {
    console.log("El vehículo quedó liviano");

}else{
    console.log("El vehículo quedó pesado");
}