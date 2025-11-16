class Jugador {
  constructor(posX, posY) {
    this.posX = posX;
    this.posY = posY;
    this.velocidad = 3;
    this.vidas = [1, 1, 1];
    this.ancho = 110;
    this.alto = 160;

    this.hitX = this.posX + 20;
    this.hitY = this.posY + 20;
    this.hitAncho = 60;
    this.hitAlto = 100;

    this.saltoenY = 55;
    this.estaSaltando = false;
    this.posicionSuelo = height/2 - 82.5;
  }

  dibujar() {
    image(imgPJ1, this.posX, this.posY, this.ancho, this.alto);
    //fill(100, 0, 0, 100)
    //rect(this.hitX, this.hitY, this.hitAncho, this.hitAlto);
    this.hitX = this.posX + 20;
    this.hitY = this.posY + 20;

    this.vidasActuales();
    this.saltar();
  }

  vidasActuales() {
    for (let i = 0; i < this.vidas.length; i++) {
      ellipse(30 + i * 30, 30, 20, 20);
    }
  }

  restarVida() {
    if (this.vidas.length > 0) {
      this.vidas.pop();
    }
  }
 
  estaMuerto() {
   return this.vidas.length === 0;
  }
  saltar() {
    if (keyIsDown(UP_ARROW) && this.estaSaltando == false) {
      this.estaSaltando = true;
      this.posY -= this.saltoenY;
    }

    if (this.estaSaltando) {
      this.posY += 1.5;
    }

    if (this.posY >= this.posicionSuelo) {
      this.posY = this.posicionSuelo;
      this.estaSaltando = false;
    }
  }
  reiniciar() {
    this.vidas = [1, 1, 1]; // restaurar todas las vidas
    this.posX = 400;
    this.posY = height/2 - 82.5;
    this.estaSaltando = false;
}}
