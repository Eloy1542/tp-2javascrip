let numero = parseInt(prompt("Introduce un numero menor a 50"));
let x = numero
let y = x
if(numero > 1 && numero<=50){
    for(x = numero; x>=1; x-- ){
        for(y=x ; y >=1  ; y-- ){
            document.write(x)
        }
        document.write("<br>")
    }
}else(alert("Introduzca un numero mayor a 1 y menor a 50"))
