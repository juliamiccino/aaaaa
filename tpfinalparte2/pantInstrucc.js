class Instrucciones {
  constructor() {
    this.botonIniciar = new Boton(340);
  }
  dibujar() {
    this.estetica();
    this.botonIniciar.boton(0);
  }

  estetica() {
    fill(131, 160, 220);
    rect(width/2, height/2, 640, 480); //puedo cambiar por un background o imagen
    rectMode(CENTER);
    fill(131, 160, 200);
    rect(width/2, 255, 470, 373);
    rect(width/2, 100, 250, 110);
    textAlign(CENTER, TOP);
    textSize(24);
    fill(255);
    text("El Doble\nMalvado", width/2, 110-35);
    textSize(16);
    text("Smith está atrapado con su doble malvado\nUsá la flecha arriba para saltar y esquivar las balas que dispara.\nTu objetivo es sobrevivir 20 segundos sin perder tus 3 vidas.\nCada bala que te golpea te quita una vida.\nSi perdés las tres… el doble te atrapa\n¡Mantenete en pie y resistí!", width/2, 180);
  }
}
