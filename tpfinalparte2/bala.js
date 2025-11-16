class Bala {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.velocidad = 4;
    this.tam = 7;
    this.bajadaBala = 1;
    this.colorBala = color(255, 100, 100);
    this.activa = true;
  }

  actualizar() {
    this.x += this.velocidad;
    this.y += this.bajadaBala;
    if (this.x > width) {
      this.activa = false;
    }
  }

  dibujar() {
    if (this.activa) {
      this.actualizar();
      fill(this.colorBala);
      circle(this.x, this.y, this.tam);
    }
  }
  
}
