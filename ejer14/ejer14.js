// Leer la nota de un estudiante (en números enteros) e imprimir su equivalente en letras sabiendo que si la nota es 5 su equivalente es EXCELENTE, 4 es BUENO, 3 es ACEPTABLE, 2 INSUFICIENTE y 1 DEFICIENTE.

const Nota = parseInt(prompt("Ingrese la nota del estudiante (5 a 1) siendo 5 la mayor nota y 1 la menor"));

switch (Nota) {
    case 5: console.log("EXCELENTE");
        break;
    case 4: console.log("BUENO");
        break;
    case 3: console.log("ACEPTABLE");
        break;
    case 2: console.log("INSUFICIENTE");
        break;
    case 1: console.log("DEFICIENTE");
}
