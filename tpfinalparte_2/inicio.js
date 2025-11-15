class Inicio {
  constructor() {
    this.botonInicio = new Boton(193, 0);
  }
  dibujar() {
    this.estetica();
    this.botonInicio.boton();
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
