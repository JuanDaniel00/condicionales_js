// Un atleta recorre tres distancias diferentes en tres competiciones distintas. Calcular e imprimir la distancia promedio. Imprima “Excelente distancia” si el promedio es mayor a 12 kilómetros.

const Distancia1 = parseInt(prompt("Ingrese la distancia 1"));
const Distancia2 = parseInt(prompt("Ingrese la distancia 2"));
const Distancia3 = parseInt(prompt("Ingrese la distancia 3"));

const Promedio = (Distancia1 + Distancia2 + Distancia3) / 3;

if (Promedio < 12) {
    console.log(`El promedio de las distancias es: ${Promedio}`);
}else{
    console.log(`El promedio de las distancias es: ${Promedio}`);
    console.log(`Excelente distancia`);
}