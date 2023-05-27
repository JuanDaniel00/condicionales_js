// Calcular el salario neto de un empleado sabiendo que se le hace una retención del 3% para pensión y 5% para salud si su salario básico no llega a los $400.000, si este es mayor a $800.000 los porcentajes serán del 4% para pensión y 7% para salud; en caso contrario los porcentajes serán 9% y 7% respectivamente. Se debe leer el valor de cada hora y el número de horas trabajadas por el empleado

const ValorHora = parseInt(prompt("Ingrese el valor de cada hora"));
const NumeroHoras = parseInt(prompt("Ingrese el número de horas trabajadas"));

const Salario = ValorHora * NumeroHoras;

if (Salario < 400000) {
    console.log(`El salario neto al 3% y el 5% es: ${Salario - (Salario * 0.03) - (Salario * 0.05)}`);
}
else if (Salario > 800000) {
    console.log(`El salario neto respecto al 4% y 7% es: ${Salario - (Salario * 0.04) - (Salario * 0.07)}`);
}else if(Salario >= 400000 && Salario <= 800000) {
    console.log(`El salario neto respecto al 9% y 7% es: ${Salario - (Salario * 0.09) - (Salario * 0.07)}`);
}
