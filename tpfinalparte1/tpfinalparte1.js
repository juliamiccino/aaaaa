//comision 1 - Matias Arias Julia Miccino
// https://www.youtube.com/watch?v=XU-5EhznfEc

let pantallaActual = 0;
let pantallas = [];
let click;

// LISTA COMPLETA DE IMÁGENES
let archivos = [
    "Pantalla_0.jpeg", "Pantalla_1.jpg","Pantalla_2.jpg","Pantalla_3.jpg","Pantalla_4.jpg","Pantalla_5.jpg",
    "Pantalla_6.jpg","Pantalla_7.jpg","Pantalla_8.jpg","Pantalla_9.jpg","Pantalla_10.jpg","Pantalla_11.jpg",
    "Pantalla_12.jpg","Pantalla_13_FinalOriginal.jpg", "Pantalla_14_FinalBueno.jpg","Pantalla_15_FinalMalo.jpeg", 
    "Pantalla_16.jpeg"
];

// LISTA COMPLETA DE TEXTOS
let textos = [
"Bienvenido a la historia de Braling y Smith, para avanzar en la historia clickea la pantalla",
"Braling y Smith caminan de noche. Braling, después de muchos años, ha salido por primera vez. Smith no entiende por qué quiere volver tan temprano...",
"Smith recuerda cómo la esposa de Braling lo obligó a casarse hace diez años...",
"Smith pregunta cómo hará para ausentarse sin que su esposa lo note...",
"El “doble” baja a saludarlos. Smith lo examina...",
"Braling explica cómo usó la marioneta para quedarse en casa...",
"DECISIÓN 2: Escuchar el plan completo o alejarse pensativo",
"En el ómnibus de vuelta a casa, Smith lee los detalles...",
"Al llegar a su casa, Smith observa a su esposa dormida...",
"DECISIÓN 3: Buscar la chequera o ir directamente a la empresa",
"Mientras Smith vive su revelación, Braling regresa a casa con su doble...",
"Braling Dos admite que aprecia mucho a la esposa de Braling…",
"DECISIÓN 4: Huir y llamar a la empresa o enfrentar al doble",
"Final : La esposa de Braling se despierta al sentir un beso...",
"Final : Braling logra escapar y llamar a Marionetas S.A....",
"Final : Smith, animado por el ejemplo, va a la empresa…",
"Gracias por jugar. Presiona reiniciar para volver al inicio."
];

// DECISIONES COMPLETAS
let decisiones = [
    [{ texto: "Comenzar", destino: 1 }],
    [], [],

    [{ texto: "Seguir a Braling", destino: 4 },
     { texto: "Irse a casa", destino: 7 }],

    [], [],

    [{ texto: "Escuchar el plan completo", destino: 7 },
     { texto: "Alejarse pensativo", destino: 7 }],

    [], [],

    [{ texto: "Buscar la chequera", destino: 10 },
     { texto: "Ir directamente a la empresa", destino: 15 }],

    [], [],

    [{ texto: "Huir y llamar a la empresa", destino: 14 },
     { texto: "Enfrentarlo", destino: 13 }],

    [], [],

    [{ texto: "Siguiente", destino: 16 }],
    [{ texto: "Reiniciar", destino: 0 }]
];
function mostrarTexto(texto, x, y, ancho, alto) {
    fill(0, 150);
    rect(x, y, ancho, alto, 10);

    fill(255);
    textSize(16);
    textAlign(LEFT, TOP);
    text(texto, x + 10, y + 10, ancho - 20, alto - 20);
}


function preload() {
    click = loadSound("data/click.mp3");
    for (let i = 0; i < archivos.length; i++) {
        pantallas[i] = loadImage("data/" + archivos[i]);
    }
}

// SETUP COMPLETO
function setup() {
    createCanvas(640, 480);
    textFont("Arial");
}


// -----------------------------------------------------------
// BOTONES (SIN CAMBIAR TU SISTEMA)
// -----------------------------------------------------------
function dibujarBotones() {
    let op = decisiones[pantallaActual];

    if (op && op.length > 0) {
        let total = op.length;
        let anchoBoton = 180;
        let espaciado = 40;
        let y = height - 50;
        let altoBoton = 35;

        let anchoTotal = total * anchoBoton + (total - 1) * espaciado;
        let startX = (width - anchoTotal) / 2;

        for (let i = 0; i < total; i++) {
            let x = startX + i * (anchoBoton + espaciado);
            fill(200);
            rect(x, y, anchoBoton, altoBoton, 8);
            fill(0);
            textAlign(CENTER, CENTER);
            text(op[i].texto, x + anchoBoton / 2, y + altoBoton / 2);
        }
    }
}
function draw() {
    background(0);
    image(pantallas[pantallaActual], 0, 0, width, height);
    mostrarTexto(
        textos[pantallaActual], 20, height - 120, width - 40, 100);

    dibujarBotones();
}
function manejarClickBotones() {
    let op = decisiones[pantallaActual];
    if (!op || op.length === 0) {
        return false;
    }

    let total = op.length;
    let anchoBoton = 180;
    let espaciado = 40;
    let y = height - 50;
    let altoBoton = 35;

    let anchoTotal = total * anchoBoton + (total - 1) * espaciado;
    let startX = (width - anchoTotal) / 2;

    for (let i = 0; i < total; i++) {
        let x = startX + i * (anchoBoton + espaciado);
        if (
            mouseX > x && mouseX < x + anchoBoton &&
            mouseY > y && mouseY < y + altoBoton
        ) {
            pantallaActual = op[i].destino;
            return true;
        }
    }
    return false;
}
function mousePressed() {
    let clickEnBoton = manejarClickBotones();

    if (!clickEnBoton) {
        if (!decisiones[pantallaActual] || decisiones[pantallaActual].length === 0) {
             pantallaActual++;
        }
    }
    
    if (mouseButton === LEFT && click) {
        click.play();
    }
}

