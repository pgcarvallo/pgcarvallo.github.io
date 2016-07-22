//clase programacion creativa jueves 21 julio 2016
//setup corre al princio de play
function setup() {
  // lienzo 800x600
  createCanvas(windowWidth, windowHeight);
  //color en rgb
  background(255,255,0);
  setupOsc();
  frameRate(100)
}

//corre luego de setup corre a 60fps

//variables : espacio en memoria para guardar datos
//DECLARAR decirle al pc q guarde memoria (se hace solo una vez)
//queda así

var diametro;
//despues se le da valor a la var
//ASIGNAR es darle valor
diametro = 80;
// esto fue una variable global

var osc;
//funcion para configurar el oscilador (osc)
function setupOsc() {
  osc = new p5.Oscillator();
  osc.setType("sine");
  osc.freq(440);
  osc.amp(0.7);
  osc.start();
}

//hay 2 tipos de variables
//GLOBALES (viven fuera de la funcion, en este caso "diametro")
//LOCALES (vive dentro de una función)

//las funciones deben ser declaradas, se hace así:

function nombreFuncion() {
  
} 

//esta no teine nada
//pero ahora haremos una funcion que describe le destino de elipse

function estilo1(){
    strokeWeight (10)
    //(ancho del borde)
  
  //stroke solo define color de relleno
  
  //1 es greyscale 0 negro 255 blanco
  //2 bn + alpha
  //3 rgb
  //4 rgb+alpha
  
  stroke (100)
  fill(0,50)
  
}

function estilo1(){
    strokeWeight (10)
    //(ancho del borde)
  
  //stroke solo define color de relleno
  
  //1 es greyscale 0 negro 255 blanco
  //2 bn + alpha
  //3 rgb
  //4 rgb+alpha
  
  stroke (100)
  fill(0,50)
}

function estilo2(){
    strokeWeight (10)
    //(ancho del borde)
  
  //stroke solo define color de relleno
  
  //1 es greyscale 0 negro 255 blanco
  //2 bn + alpha
  //3 rgb
  //4 rgb+alpha
  
  stroke (150)
  fill(0,100)
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight)
  //ajusta y crea un lienzo nuevo cada vez que 
  background(random(255), random(255), random(255))
  //valores para rgb aleatorios
}

function muchasVeces() {
  
  //for(inicio;condicion;refresco)
  for(var i=0; i < 1000; i++){}
  ellipse(random(width),random(height),random(100),random(100)) 
}

function draw() {
  //llamar a muchasVeces
  muchasVeces()
  
  // mouse en mitad derecha = que suene, si no no suene
  if (mouseX > width/2){
    osc.amp(0.7)
    osc.freq(500+random(500))
    
  }
  
  //si no es verdad...
  else {
    osc.amp(0)
  }
  
  var ancho;
  ancho = 5
  //eso fue una variable local
  //background(255,255,0)
  estilo1()
  //elemento dinamico
  //elipse coordenada 100,100 xy ancho y alto
  //ancho 50 altura 10
  //defecto: borde 1px relleno blanco
  //cambiemoslo
  ellipse(mouseX,mouseY,diametro,diametro)
  
  estilo2()
  triangle (0,0,
  0,height,
  mouseX, mouseY)
  
  rect(400,400,50,50)
  
  //osc.freq(mouseX)
  //osc.amp(0.1+mouseY/height)
  

}