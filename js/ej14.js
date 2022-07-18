let cadena = prompt("Introduce una cadena de texto:");
let caracteres = cadena.length;
let caracter;
let i=0;
for (i = 0; i < caracteres; i++) {
  caracter = cadena.charAt(i); 
  if (i == caracteres - 1) {
    document.write(caracter);
  } else {
    document.write(caracter + "-");
  }
}
