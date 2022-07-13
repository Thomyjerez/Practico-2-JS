let numero = parseInt(prompt("Ingrese el numero de escalones"));




if(Number(numero) == numero){
    if (numero > 0 && numero <= 50){
        let a;
        let repeticion 
        for(a = 0; a <= numero; a++){
            for(repeticion = 1; repeticion <= a; repeticion++){
                document.write(repeticion)
            }
            document.write ("<br>")
        }
    }
    
}
else{
    alert("El numero ingresado no es valido")
}