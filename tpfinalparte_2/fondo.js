class Fondo {
  constructor() {
    this.fondoX = 0;
    this.fondoY = 0;
    this.fondoAncho = 3179;
    this.fondoAlto = 480;
    this.llego = false;
    this.velocidadJugador = 8;
    this.seMueve = false;
  }
  dibujarse() {
    image(imagenFondo, this.fondoX, this.fondoY, this.fondoAncho, this.fondoAlto);
  }
  seMueve() {
    if (keyCode == RIGHT_ARROW) {
      this.seMueve = true;
    }
  }
  desplazamientoFondoenX(keyCode) {
    if (keyCode == RIGHT_ARROW) {
      this.moverDer();
    }
  }
  moverDer() {
    this.fondoX -= this.velocidadJugador;
    this.puertaSalida();
  }
  puertaSalida() {
   if(this.fondoX <= -2209.5){
     this.llego = true;
   }
  }
}
