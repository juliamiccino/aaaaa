class Reiniciar {
  constructor() {
    this.botonReinicio = new Boton(200);
    this.botonCreditos = new Boton(270);
  }
  dibujar() {
    this.estetica();
    this.botonReinicio.boton(3);
    this.botonCreditos.boton(2);
  }
  estetica() {
    fill(0, 150);
    rect(width/2, height/2, 640, 480);
    rectMode(CENTER);
    fill(0, 210);
    rect(width/2, 255, 305, 373);
  }
}
