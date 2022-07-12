// pedir al usuario que ingrese numeros

// Si no es un número deberá indicarse con un «alert»

// Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.


let suma = 0;

do{
    let numeroIngresado = parseInt (prompt("Ingrese un numero"))
    suma = suma + numeroIngresado
}while (confirm("¿Desea ingresar un numero?"))



document.write("La suma de los numeros ingresados es: " + suma)