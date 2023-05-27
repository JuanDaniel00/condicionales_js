// Desarrollar el mismo ejercicio anterior pero leyendo una nota con sus decimales y teniendo en cuenta que si la nota es mayor o igual que 4.6 es EXCELENTE, si la nota está entre 3.6 y 4.5 es BUENO, si la nota está entre 3.0 y 3.5 es ACEPTABLE, si la nota mayor o igual que 2.0 y menor que 3.0 es INSUFICIENTE y si la nota es menor a 2.0 la nota en letras es DEFICIENTE.

const Nota = parseFloat(prompt("Ingrese la nota del estudiante (0 a 5) siendo 5 la mayor nota y 0 la menor"));

if (Nota >= 4.6) {
    console.log("EXCELENTE");
}else if (Nota >= 3.6 && Nota <= 4.5) {
    console.log("BUENO");
}else if (Nota >= 3.0 && Nota <= 3.5) {
    console.log("ACEPTABLE");
}else if (Nota >= 2.0 && Nota <= 2.9) {
    console.log("INSUFICIENTE");
}else{
    console.log("DEFICIENTE");
}