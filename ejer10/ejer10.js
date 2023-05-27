// Calcular e imprimir el salario básico, el salario neto y cada uno de los porcentajes que tiene un empleado en su liquidación de nómina. Tenga en cuenta que recibe un auxilio de alimentación del 1% del salario básico y un subsidio de transporte de $45.000 si su salario no asciende a $300.000, sino no tendrá auxilio de alimentación y el subsidio de transporte será de $25.000. Luego se le hacen unas deducciones correspondientes al 1.5%, 28.1% y 0.55% por concepto de salud, pensión y aportes parafiscales respectivamente. Luego de calculado el salario neto, se pide sacar un 0.05% del salario neto para una donación a una catástrofe.

const ValorHora = parseInt(prompt("Ingrese el valor de cada hora"));
const NumeroHoras = parseInt(prompt("Ingrese el número de horas trabajadas"));

const SalarioBasico = ValorHora * NumeroHoras;

const SaludDescuento = SalarioBasico * 0.015;
const PensionDescuento = Math.round(SalarioBasico * 0.281);
const ParafiscalesDescuento = SalarioBasico * 0.0055;
const Donacion = SalarioBasico * 0.0005;

let SubsidioTransporte = 0;
let AuxilioAlimentacion = 0;

if (SalarioBasico < 300000) {
    SubsidioTransporte = 45000;
    AuxilioAlimentacion = SalarioBasico * 0.01;
    
} else {
    SubsidioTransporte = 25000;
    AuxilioAlimentacion = 0;
}

const SalarioNeto = SalarioBasico + AuxilioAlimentacion + SubsidioTransporte - SaludDescuento - PensionDescuento - ParafiscalesDescuento;

console.log(`El salario básico es: ${SalarioBasico}$`);
console.log(`El salario neto es: ${SalarioNeto}$`);
console.log(`El auxilio de alimentación es: ${AuxilioAlimentacion}$`);
console.log(`El subsidio de transporte es: ${SubsidioTransporte}$`);
console.log(`El monto quitado por los conceptos de salud es: ${SaludDescuento}$`);
console.log(`El monto quitado por pensión es: ${PensionDescuento}$`);
console.log(`El monto quitado por aportes parafiscales es: ${ParafiscalesDescuento}$`);
console.log(`El monto quitado por donación es: ${Donacion}$`);
