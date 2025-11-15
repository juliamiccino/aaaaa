class Final {
  constructor() {
    this.reiniciar = new Boton(193);
  }
  dibujar() {
    this.estetica();
    this.reiniciar.boton(3);
  }
  botonIniciar() {
  }
  botonCreditos() {
  }
  estetica() {
    fill(0, 150);
    rect(width/2, height/2, 640, 480);
    rectMode(CENTER);
    fill(0, 210);
    rect(width/2, 255, 305, 373);
  }
}
