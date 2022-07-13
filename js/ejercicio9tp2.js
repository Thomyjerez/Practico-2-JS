let a = ""
let b = 500;

document.write("<hr>")

for(a = 1; a <= b; a++){
    document.write(a)

    if(a % 4 == 0){
        document.write(" Es multiplo de 4")
    }
    
    if( a % 9 == 0){
        document.write(" Es multiplo de 9")

    }

    document.write(" <br> ")

    if (a % 5 == 0){
        document.write("<hr> ")
    }
}