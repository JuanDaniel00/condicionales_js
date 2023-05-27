// El mismo ejercicio anterior, pero ahora el rango esta entre A y B, deben tener en cuenta que si A es mayor que B, el programa debe enviar un error.

const A = parseInt(prompt("Ingrese el número A"));
const B = parseInt(prompt("Ingrese el número B"));

if (A > B) {
    console.log(`ERROR - El número A no puede ser mayor que B - ERROR`);
}else{
    const Numero = parseInt(prompt("Ingrese un número para calcular si está comprendido entre A y B"));
    if (Numero >= A && Numero <= B) {
        console.log(`El ${Numero} está comprendido entre ${A} y ${B}`);
    }else{
        console.log(`El ${Numero} no está comprendido entre ${A} y ${B}`);
    }
}