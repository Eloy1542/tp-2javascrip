let i = 0;

for (i = 1; i <= 500; i++) {
  if (i % 5 === 0) {
    document.write("---------" + "<br>");
  }
  document.write(i + "<br>");

  if(i%4 ===0){
    document.write("Es multiplo de 4" + "<br>")
  }
  if(i%9 ===0){
    document.write("Es multiplo de 9" + "<br>")
  }
}
