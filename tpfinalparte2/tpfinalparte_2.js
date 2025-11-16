let caja;

function preload(){
imagenFondo = loadImage("data/fondo2.jpg")
imgPJ1 = loadImage("data/pj1.png");
imgPJ2 = loadImage("data/pj2.png");
imgDM1 = loadImage("data/doblecorriendo.1.png");
//imgDM2 = loadImage("");
}
function setup() {
createCanvas(640, 480);
caja = new Juego();
}


function draw() {
  background(50);
  caja.dibujar();
}

function mousePressed(){
caja.pantallas();
}
