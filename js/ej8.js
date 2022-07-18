let numero = parseInt(prompt("Introduce un numero hasta 50"));
let x = 1 
let y = 0

if(numero > 1 && numero <= 50){
    for(x=0; x<=numero ; x++){
        for(y=1 ; y < x ; (y++)){
            document.write(y)
        }
        document.write("<br>")
    }
}else(alert("Introduzca un numero mayor a 1 y menor a 50"))