let numero = parseInt(prompt("Ingrese el numero de escalones"));

if (Number(numero) == numero) {
  if (numero > 0 && numero <= 50) {
    let repeticion;
    let a;
    for (a = numero; a >= 1; a--) {
      for (repeticion = a; repeticion >= 1; repeticion--) {
        document.write(a)
      }
      document.write("<br>");
    }
  }else{
    alert("El numero ingresado esta fuera de rango" )
}
}
