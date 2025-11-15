class Estructuras {
  constructor(x) {
    this.x = x;
    this.y = 260;

    this.Tam = 40;

    this.velocidad = 2;
    this.activa = true;
  }

  actualizar() {
    this.x -= this.velocidad;
    if (this.x < -50) {
      this.activa = false;
    }
  }

  dibujar() {
    this.actualizar();
    rect(this.x, this.y, this.Tam, this.Tam);
  }

  obstruir() {
  }
  fueraDePantalla() {
  }
}
