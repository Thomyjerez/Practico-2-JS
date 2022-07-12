let frase = ""

while (confirm ("¿Desea ingresar una palabra?")){ 
    let textoingresado = prompt("Ingrese una palabra");
    frase = frase + "-" + textoingresado;
   console.log(textoingresado);
   console.log(frase);
}

