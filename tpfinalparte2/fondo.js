class Fondo {
  constructor() {
    this.fondoX = 0;
    this.fondoY = 0;
    this.fondoAncho = 5097;
    this.fondoAlto = 480;
    this.llego = false;
    this.velocidadJugador = 3.7;
    this.seMueve = false;
  }
  dibujarse() {
    image(imagenFondo, this.fondoX, this.fondoY, this.fondoAncho, this.fondoAlto);
  }
  seMueve() {
    if (frameCount>180) {
      this.seMueve = true;
    }
  }
  desplazamientoFondoenX() {
    if (frameCount>180) {
      this.moverDer();
    }
  }
  moverDer() {
    this.fondoX -= this.velocidadJugador;
    this.puertaSalida();
  }
  puertaSalida() {
   if(this.fondoX <= -4314){
     this.llego = true;
   }
  }
}
