
let fraseCompleta =""

while(confirm("¿Quiere ingresar algun texto?")){
    let texto = prompt("Ingrese una palabra")
    fraseCompleta= fraseCompleta + "-" +  texto
    console.log(texto)
    console.log(fraseCompleta)
}

