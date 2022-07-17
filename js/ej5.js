let dni = parseInt(prompt("Ingrese su numero de documento"));
let resultado = dni % 23;


switch (resultado) {
  case 0:
    document.write("Su letra asignada es T");
    break;
  case 1:
    document.write("Su letra asignada es R");
    break;
  case 2:
    document.write("Su letra asignada es W");
    break;
  case 3:
    document.write("Su letra asignada es A");
    break;
  case 4:
    document.write("Su letra asignada es G");
    break;
  case 5:
    document.write("Su letra asignada es M");
    break;
  case 6:
    document.write("Su letra asignada es Y");
    break;
  case 7:
    document.write("Su letra asignada es F");
    break;
  case 8:
    document.write("Su letra asignada es P");
    break;
  case 9:
    document.write("Su letra asignada es D");
    break;
  case 10:
    document.write("Su letra asignada es X");
    break;
  case 11:
    document.write("Su letra asignada es B");
    break;
  case 12:
    document.write("Su letra asignada es N");
    break;
  case 13:
    document.write("Su letra asignada es J");
    break;
  case 14:
    document.write("Su letra asignada es Z");
    break;
  case 15:
    document.write("Su letra asignada es S");
    break;
  case 16:
    document.write("Su letra asignada es Q");
    break;
  case 17:
    document.write("Su letra asignada es V");
    break;
  case 18:
    document.write("Su letra asignada es H");
    break;
  case 19:
    document.write("Su letra asignada es L");
    break;
  case 20:
    document.write("Su letra asignada es C");
    break;
  case 21:
    document.write("Su letra asignada es K");
    break;
  case 22:
    document.write("Su letra asignada es E");
    break;
    default:
        alert("No tiene letra asignada");

        confirm("¿Desea escribir un nuevo DNI?");
}
