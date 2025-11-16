class Inicio {
  constructor() {
    this.botonInicio = new Boton(200);
    this.botonInstrucciones = new Boton(270);
    this.botonCreditos = new Boton (340);
  }
  dibujar() {
    this.estetica();
    this.botonInicio.boton(0);
    this.botonInstrucciones.boton(1);
    this.botonCreditos.boton(2);
  }
  estetica() {
    fill(131, 160, 220);
    rect(width/2, height/2, 640, 480); //puedo cambiar por un background o imagen
    rectMode(CENTER);
    fill(131, 160, 200);
    rect(width/2, 255, 305, 373);
    rect(width/2, 100, 250, 110);
    textAlign(CENTER, TOP);
    textSize(24);
    fill(255);
    text("El Doble\nMalvado", width/2, 110-35);
  }
}
