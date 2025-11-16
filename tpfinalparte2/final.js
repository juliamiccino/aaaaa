class Final {
  constructor() {
    this.botonReiniciar = new Boton(200);
    this.bCreditos = new Boton(270);
  }

  dibujar() {
    this.estetica();

    // Dibujar botones
    this.botonReiniciar.boton(3); 
    this.bCreditos.boton(2); 
  }

  estetica() {
    fill(0, 150);
    rectMode(CENTER);
    rect(width / 2, height / 2, 640, 480);

    fill(0, 210);
    rect(width / 2, 255, 305, 373);

    fill(255);
    textSize(30);
    textAlign(CENTER, CENTER);
    text("GANASTE", width / 2, 120);
  }
}
