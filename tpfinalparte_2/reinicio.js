class Reiniciar {
  constructor() {
    this.botonReinicio = new Boton();
  }
  dibujar() {
    this.estetica();
    this.botonReinicio.boton();
  }
  estetica() {
    fill(0, 150);
    rect(width/2, height/2, 640, 480);
    rectMode(CENTER);
    fill(0, 210);
    rect(width/2, 255, 305, 373);
  }
}
