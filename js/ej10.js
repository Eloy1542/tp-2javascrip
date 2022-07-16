let columnas = parseInt(prompt("Ingrese un numero de columnas"));
let filas = parseInt(prompt("Ingrese un numero de filas"));
let resultado = filas * columnas
document.write(`<table>
<tbody>`);

for (let indicefila = 0; indicefila < filas; indicefila++) {
  document.write(`<tr>`);

  for (let indicecolumna = 0; indicecolumna < columnas; indicecolumna++) {
    document.write(`<td> ${resultado} </td>`);
    resultado--
  }
  document.write(`</tr>`);
}

document.write(`
</tbody>

</table>`);
