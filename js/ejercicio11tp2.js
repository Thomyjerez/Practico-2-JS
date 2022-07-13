let nombre = prompt("Ingrese un nombre");
let edad = Number(prompt("Ingrese una edad"));

let nombre2 = prompt("Ingrese un nombre");
let edad2 = Number(prompt("Ingrese una edad"));

let nombre3 = prompt("Ingrese un nombre");
let edad3 = Number(prompt("Ingrese una edad"));

let mayor = Math.max(edad, edad2, edad3);

if (mayor == edad) {
  document.write(nombre + " es el mayor");
} else if (mayor == edad2) {
  document.write(nombre2 + " es el mayor ");
} else if (mayor == edad3) {
  document.write(nombre3 + " es el mayor");
} else {
  document.write("Tienen la misma edad");
}
