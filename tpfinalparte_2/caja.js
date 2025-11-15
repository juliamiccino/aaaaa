class Juego { /* caja del juego */
  constructor() {
    //this.reglas = new Reglas();
    this.estado = 0;
    //this.portada = new Inicio();
    this.fondo = new Fondo();
    this.jugador = new Jugador(400, height/2-80);
    this.doble = new Doblemalvado(100, height/2-82.5);
    this.estructura = new Estructuras();
    this.pantallaFinal = new Final();
  }
  dibujar() {
    this.fondo.dibujarse();
    this.jugador.dibujar();
    this.doble.dibujar();

    if (keyIsDown(RIGHT_ARROW)) {
      this.fondo.moverDer();
    }
    //if this.jugador.muerto (muerto = vidas = 0) this,pantallaPerdiste.dibujar()
    this.colisionBala();
    if (this.fondo.llego) {   // ← acá está el único cambio real
      this.pantallaFinal.dibujar();
    }
  }
  jugadorAlcanzado() {
  }
  colisionBala(){
    let b = this.doble.bala;
    if (b.activa === false) {
      return;
    }

    // Rectángulo de la bala
    let bx = b.x - b.tam/2;
    let by = b.y - b.tam/2;
    let bTam = b.tam;

    // Hitbox del jugador
    let hx = this.jugador.hitX;
    let hy = this.jugador.hitY;
    //let hitAn = this.jugador.hitAncho;
    let hitAl = this.jugador.hitAlto;

    // va a colisionar solo por la izquierda
    let condicionLadoIzq =  bx + bTam >= hx && bx < hx;

    let condicionVertical = by + bTam > hy && by < hy + hitAl;
    if (condicionLadoIzq && condicionVertical === true) {
      this.jugador.restarVida();
       b.activa = false;
    }
  }
  /*colisionBala() {
   let b = this.doble.bala;
   if (b.activa == false) {
   return;
   }
   let bx = b.x - b.tam/2;
   let by = b.y - b.tam/2;
   let bw = b.tam;
   let bh = b.tam;
   
   let j = this.jugador;
   if (j.hitX < bx + bw && j.hitX + j.hitAncho > bx && j.hitY < by + bh && j.hitY + j.hitAlto > by) {
   j.restarVida();
   b.activa = false;
   }
   }*/
}
/*colisionEstructura(){
 let distancia = dist(this.estructura.x, this.jugador;
 if (distancia > 5){
 this.jugador.vidas = -1;
 }
 }*/
//let distancia= dist(this.auto.x+this.auto.tam/2, this.auto.y+this.auto.tam/2,
//   this.obstaculo[i].pX, this.obstaculo[i].pY);
// if (distancia<this.auto.tam/2) {//acciones cuando hay contacto, consecuencia de que el auto choque  (pierdo vida, vuelvo al inicio, puntaje, etc)
// this.auto.y+=random(-10, 10);
