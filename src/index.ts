/**
 • Implemente un método llamado cantidadDeDivisores que
reciba un número entero y devuelva la cantidad de divisores
• Por ejemplo, para el número 16, sus divisores son 1, 2, 4, 8,
16, por lo que la respuesta debería ser 5
• Re-utilice el método esMultiplo implementado para el ejercicio
anterior
 */

let numero1: number = Number(prompt("Ingrese el número: "));

function esMultiplo(numero1: number, numero2: number): boolean {
  let resultado: boolean = false;
  if (numero1 % numero2 === 0) {
    resultado = true;
  }
  return resultado;
}

function cantidadDeDivisores(numero1: number): number {
  let cantidad: number = 0;
  for (let i: number = 1; i <= numero1; i++) {
    if (esMultiplo(numero1, i) === true) {
      cantidad++;
    }
  }

  return cantidad;
}

console.log(
  "El número " +
    numero1 +
    " tiene " +
    cantidadDeDivisores(numero1) +
    " divisores"
);
