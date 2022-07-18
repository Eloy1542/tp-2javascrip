function numeroMayor(min, max) {
    min = Math.ceil(1);
    max = Math.floor(99);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

document.write(numeroMayor())