// Leer nombre y estatura de una persona, Imprimir el nombre si su estatura es mayor a 165.

const Nombre = prompt("Ingrese su nombre");
const Estatura = parseInt(prompt("Ingrese su estatura"));

if (Estatura > 165) {
    console.log(`Su nombre es ${Nombre}`);
} else {
    console.log(`Su estatura es menor a 165`);
}