class Perdiste {
  constructor() { 
    this.botonPerdiVolver = new Boton(270);    
  }

  dibujar() {
    this.estetica(); 
    this.botonPerdiVolver.boton(4);    // reiniciar
  }

  estetica() {
    rectMode(CENTER);
    fill(0, 150);
    rect(width/2, height/2, 640, 480);
    fill(0, 210);
    rect(width/2, 255, 305, 373);
    fill(255);
    textSize(30);
    textAlign(CENTER, CENTER);
    text("PERDISTE", width/2, 120);
  }
}
