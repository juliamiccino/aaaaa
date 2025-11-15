class Boton {
  constructor(botonY) {
    this.botonX = width/2;
    this.botonY = botonY;
    this.anchoBoton = 135;
    this.altoBoton = 51;
    this.colorBoton = color(40, 200, 100);
    this.botones = ["Iniciar", "Instrucciones", "Creditos", "Reiniciar", "Volver al inicio"];
    this.clickeado = false;
  }

  boton(op) {
    fill(this.colorBoton);
    rectMode(CENTER);
    rect(this.botonX, this.botonY, this.anchoBoton, this.altoBoton);
    textSize(16);
    textAlign(CENTER, CENTER);
    fill(0);
    text(this.botones[op], this.botonX, this.botonY);
  }

  fueClickeado() {
    if ( mouseX > this.botonX - this.anchoBoton/2 && mouseX < this.botonX + this.anchoBoton/2 &&
      mouseY > this.botonY - this.altoBoton/2 && mouseY < this.botonY + this.altoBoton/2)
    {
      this.clickeado = true;
    } else {
      this.clickeado = false;
    }
  }
}
