class Doblemalvado {
 constructor(x, y) {
 this.x = x;
 this.y = y;
 this.velocidadDoble = 2.8;
 this.ancho = 110;
 this.alto = 165;
 this.posXOriginal = 100;
 this.dobleAvanza = false;
 this.bala = new Bala(this.x + 78, this.y + 46);
 }
 
 
 alcanzarJugador(){}
 
 /*movimiento(keyCode) {
 if(keyCode == RIGHT_ARROW){
 this.dobleAvanza = false;
 }
 if(this.dobleAvanza == true){
 this.x += this.velocidadDoble;
 } else {
 this.dobleAvanza = false;
 this.x = this.posXOriginal;
 }

 } */
 dibujar() {
 image(imgDM1, this.x, this.y, this.ancho, this.alto);
// this.movimiento(keyCode);
 this.disparar();
 }
 disparar() {
 
 // bala activa = se dibuja
 if (this.bala.activa) {
 this.bala.dibujar();
 }
 
 // bala no activa (X de la bala tiene un valor + alto que el ancho de la pantalla (osea no se ve)) = se crea otra bala
 else {
 this.bala = new Bala(this.x + 78, this.y + 46);
 }
 }
 }
