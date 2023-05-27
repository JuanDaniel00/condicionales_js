// Realizar un diagrama donde solicite un número y determine si es par o impar. 

const Numero = parseInt(prompt("Ingrese un número"));

if (Numero % 2 == 0) {
    console.log(`El número ${Numero} es par`);
}else{
    console.log(`El número ${Numero} es impar`);
}