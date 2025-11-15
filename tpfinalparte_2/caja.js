class Juego { /* caja del juego */
  constructor() {
    this.estado = 0;
    this.portada = new Inicio();
    this.pantallaInstrucciones = new Instrucciones();
    this.pantallaCreditos = new Creditos();
    this.fondo = new Fondo();
    this.jugador = new Jugador(400, height/2-80);
    this.doble = new Doblemalvado(100, height/2-82.5);
    this.estructura = new Estructuras();
    this.pantallaReinicio = new Reiniciar();
    this.estructura = new Estructuras(700);
    this.estructuraAnterior = null;
    this.pantallaFinal = new Final();
  }
  dibujar() {
    if (this.estado === 0) {
      this.portada.dibujar();
      return;
    }

    // ------------------------------
    // ESTADO 2: INSTRUCCIONES
    // ------------------------------
    if (this.estado === 2) {
      this.pantallaInstrucciones.dibujar();
      return;
    }

    // ------------------------------
    // ESTADO 3: CRÉDITOS
    // ------------------------------
    if (this.estado === 3) {
      this.pantallaCreditos.dibujar();
      return;
    }

    // ------------------------------
    // ESTADO 1: JUEGO
    // ------------------------------
    if (this.estado === 1) {
      this.fondo.dibujarse();
      //  dibujar estructura anterior, en principio no existe. ("fantasma")
      if (this.estructuraAnterior && this.estructuraAnterior.activa) {
        this.estructuraAnterior.dibujar();
      }

      // dibujar estructura actual
      if (this.estructura.activa) {
        this.estructura.dibujar();
      } else {
        // cuando muere, pasarla a "anterior"
        this.estructuraAnterior = this.estructura;
        // y crear una nueva estructura
        this.estructura = new Estructuras(700);
      }

      this.jugador.dibujar();
      this.doble.dibujar();
      if (keyIsDown(RIGHT_ARROW)) {
        this.fondo.moverDer();
      }
      this.colisionBala(); //if this.jugador.muerto (muerto = vidas = 0) this,pantallaPerdiste.dibujar()
      if (this.fondo.llego) {   // ← acá está el único cambio real
        this.pantallaFinal.dibujar();
      }
      if (this.jugador.estaMuerto()) {
        this.pantallaReinicio.dibujar();
      }
    }
  }
  nuevaEstructura() {
    if (this.estructura.activa) {
      this.estructura.dibujar();
    }
    // bala no activa (X de la bala tiene un valor + alto que el ancho de la pantalla (osea no se ve)) = se crea otra bala
    else {
      this.estructura = new Estructuras();
    }
  }
  jugadorAlcanzado() {
  }
  colisionBala() {
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

  pantallas() {
    function mousePressed() {

      // PORTADA
      if (caja.estado === 0) {
        if (caja.portada.botonInicio.fueClickeado()) {
          caja.estado = 1; // jugar
        }
        if (caja.portada.botonInstrucciones.fueClickeado()) {
          caja.estado = 2; // instrucciones
        }
        if (caja.portada.botonCreditos.fueClickeado()) {
          caja.estado = 3; // créditos
        }
      }

      // INSTRUCCIONES (tiene botón iniciar también)
      if (caja.estado === 2) {
        if (caja.pantallaInstrucciones.botonInicio.fueClickeado()) {
          caja.estado = 1;
        }
      }

      // CRÉDITOS (solo volver al inicio)
      if (caja.estado === 3) {
        if (caja.pantallaCreditos.botonVolver.fueClickeado()) {
          caja.estado = 0;
        }
      }

      // PANTALLA FINAL (REINICIO)
      if (caja.estado === 4) {
        if (caja.pantallaReinicio.botonReiniciar.fueClickeado()) {
          caja.estado = 0;
        }
      }
    }
  }
}

/*colisionJugadorEstructura(){
 let e = this.estructura;
 if (e.activa === false) {
 return;
 }
 
 // Rectángulo de la bala
 let ex = e.x - e.Tam/2;
 let ey = e.y - e.Tam/2;
 let eTam = e.Tam;
 
 // Hitbox del jugador
 let hx = this.jugador.hitX;
 let hy = this.jugador.hitY;
 //let hitAn = this.jugador.hitAncho;
 let hitAl = this.jugador.hitAlto;
 // si x de jugador
 // va a colisionar solo por la izquierda
 //cambiar a lado derecho
 let condicionLadoDer =  ex + eTam <= hx && ex > hx;
 
 let condicionVertical = ey + eTam < hy && ey > hy + hitAl;
 if (condicionLadoIzq && condicionVertical === true) {
 this.jugador.restarVida();
 e.activa = false;
 }
 }*/
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
