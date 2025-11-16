class Juego {
  constructor() {
    this.estado = 0;
    this.musicaIniciada = false;
    this.portada = new Inicio();
    this.pantallaInstrucciones = new Instrucciones();
    this.pantallaCreditos = new Creditos();
    this.fondo = new Fondo();
    this.jugador = new Jugador(400, height / 2 - 80);
    this.doble = new Doblemalvado(100, height / 2 - 82.5);
    this.pantallaReinicio = new Reiniciar();
    this.estructuraAnterior = null;
    this.pantPerdiste = new Perdiste();
    this.pantallaFinal = new Final();
    this.frameInicial = 0;
  }

  dibujar() {
     this.controlMusica();
    if (this.estado === 0) {
      {
        this.portada.dibujar();
        return;
      }
    }
    if (this.estado === 2) {
      {
        this.pantallaInstrucciones.dibujar();
        return;
      }
    }
    if (this.estado === 3) {
      {
        this.pantallaCreditos.dibujar();
        return;
      }
    }
    if (this.estado === 4) {
      {
        this.pantallaReinicio.dibujar();
        return;
      }
    }
    if (this.estado === 5) {
      {
        this.pantallaFinal.dibujar();
        return;
      }
    }
    if (this.estado === 6) {
      {
        this.pantPerdiste.dibujar();
        return;
      }
    }
    if (this.estado === 1) {
      {
        this.fondo.dibujarse();
        this.jugador.dibujar();
        this.doble.dibujar();
        

        if (frameCount - this.frameInicial > 140) {
          {
            this.fondo.moverDer();
          }
        }

        this.colisionBala();

        if (this.fondo.llego) {
          {
            this.reiniciarJuegoCompleto();
            this.estado = 5;
            return;
          }
        }

        if (this.jugador.estaMuerto()) {
          {
            this.reiniciarJuegoCompleto();
            this.estado = 6;
            return;
          }
        }
      }
    }
  }
 controlMusica(){
 if (this.estado === 1) {
      if (!this.musicaIniciada) {
        musica.loop(); // inicia la música solo una vez
        this.musicaIniciada = true;
      }

      // ... resto de código del juego
    } else {
      if (this.musicaIniciada) {
        musica.stop(); // detiene la música si salís del estado 1
        this.musicaIniciada = false;
      }
    }
 }
  colisionBala() {
    let b = this.doble.bala;
    if (b.activa === false) {
      {
        return;
      }
    }

    let bx = b.x - b.tam / 2;
    let by = b.y - b.tam / 2;
    let bTam = b.tam;

    let hx = this.jugador.hitX;
    let hy = this.jugador.hitY;
    let hitAl = this.jugador.hitAlto;

    let condicionLadoIzq = bx + bTam >= hx && bx < hx;
    let condicionVertical = by + bTam > hy && by < hy + hitAl;

    if (condicionLadoIzq && condicionVertical === true) {
      {
        this.jugador.restarVida();
        b.activa = false;
      }
    }
  }

  pantallas() {
    if (this.estado === 0) {
      {
        if (this.portada.botonInicio.fueClickeado()) {
          {
            this.reiniciarJuegoCompleto();
            this.estado = 1;
          }
        }

        if (this.portada.botonInstrucciones.fueClickeado()) {
          {
            this.estado = 2;
          }
        }

        if (this.portada.botonCreditos.fueClickeado()) {
          {
            this.estado = 3;
          }
        }
      }
    }
    if (this.estado === 2) {
      {
        if (this.pantallaInstrucciones.botonIniciar.fueClickeado()) {
          {
            this.reiniciarJuegoCompleto();
            this.estado = 1;
          }
        }
      }
    }

    if (this.estado === 3) {
      {
        if (this.pantallaCreditos.botonVolver.fueClickeado()) {
          {
            this.estado = 0;
          }
        }
      }
    }

    if (this.estado === 5) {
      {
        if (this.pantallaFinal.botonReiniciar.fueClickeado()) {
          {
            this.reiniciarJuegoCompleto();
            this.estado = 1;
            return;
          }
        }

        if (this.pantallaFinal.bCreditos.fueClickeado()) {
          {
            this.estado = 3;
            return;
          }
        }
      }
    }
    if (this.estado === 6) {
      {
        if (this.pantPerdiste.botonPerdiVolver.fueClickeado()) {
          {
            this.reiniciarJuegoCompleto();
            this.estado = 0;
            return;
          }
        }
      }
    }
  }

  reiniciarJuegoCompleto() {
    this.jugador.reiniciar();
    this.fondo.fondoX = 0;
    this.fondo.llego = false;
    if (this.doble.reiniciar) {
      this.doble.reiniciar();
    }
    this.frameInicial = frameCount;
    if (this.jugador.vidas === null) {
      this.jugador.vidas = 3;
    }
  }
}
