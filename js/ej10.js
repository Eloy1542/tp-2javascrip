let columnas = parseInt(prompt("Ingrese un numero de columnas"));
let filas = parseInt(prompt("Ingrese un numero de filas"));

document.write(`<table>
<tbody>`);

for (let indicefila = 0; indicefila < filas; indicefila++) {
  document.write(`<tr>`);

  for (let indicecolumna = 0; indicecolumna < columnas; indicecolumna++) {
    document.write(`<td>hola</td>`);
  }
  document.write(`</tr>`);
}

document.write(`
</tbody>

</table>`);
