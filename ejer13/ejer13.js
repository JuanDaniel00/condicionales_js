// Leer la temperatura de un día (en grados centígrados). Imprimir un mensaje “HACE FRIO” si la temperatura es menor a 23°C, imprima “ES UN BUEN DÍA” si la temperatura es mayor e igual que 23°C e inferior a 30°C. En caso que la temperatura sea igual o superior a 30°C imprima “HACE CALOR”

const Temperatura = parseInt(prompt("Ingrese la temperatura del día (°C)"));

if (Temperatura < 23) {
    console.log("HACE FRIO");
}else if (Temperatura >= 23 && Temperatura < 30) {
    console.log("ES UN BUEN DÍA");
}else{ 
    console.log("HACE CALOR");
}