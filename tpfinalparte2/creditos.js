class Creditos {
  constructor() {
    // Botón para volver a la portada
    this.botonVolver = new Boton(height - 100);
  }

  dibujar() {
    rectMode(CENTER);

    // Fondo semi-transparente
    fill(0, 150);
    rect(width/2, height/2, 640, 480);

    // Caja interior
    fill(0, 210);
    rect(width/2, height/2, 320, 300);

    // Texto
    fill(255);
    textAlign(CENTER, TOP);
    textSize(18);

    text(
      "El Doble Malvado\n\n" +
      "Juego creado por:\n" +
      "Matías Arias y Julia Miccino\n\n" +
      "Inspirado en el cuento\n" +
      "\"Marionetas S.A.\" de Ray Bradbury",
      width/2,
      height/2 - 120
    );

    // Botón volver
    this.botonVolver.boton(4); // "Volver al inicio"
  }
  fueClickeado() {
    let bx = this.botonVolver.botonX;
    let by = this.botonVolver.botonY;
    let w = this.botonVolver.anchoBoton;
    let h = this.botonVolver.altoBoton;

    return (
      mouseX > bx - w/2 && mouseX < bx + w/2 && mouseY > by - h/2 && mouseY < by + h/2
    );
  }
}
