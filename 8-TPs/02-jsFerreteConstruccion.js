/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{  
    var largo = document.getElementById("txtIdLargo").value;
    var ancho = document.getElementById("txtIdAncho").value;
    largo=parseFloat(largo);
    ancho=parseFloat(ancho);
    var perimetro = 2*largo+2*ancho;
    var cantidadDeAlambre = perimetro*3
    alert("La cantidad de alambre es: " + cantidadDeAlambre.toFixed(2));
}
function Circulo () 
{
    const PI = Math.PI
    var radio = document.getElementById("txtIdRadio").value;
    radio = parseFloat(radio);
    var perimetro = 2*PI*radio;
    var cantidadDeAlambre = perimetro*3;
    alert("La cantidad de alambre es: " + cantidadDeAlambre.toFixed(2));	
}
function Materiales () 
{
    const CEMENTO = 2
    const CAL = 3
    var largo = document.getElementById("txtIdLargo").value;
    var ancho = document.getElementById("txtIdAncho").value;
    largo=parseFloat(largo);
    ancho=parseFloat(ancho);
    var area = largo*ancho;
    var bolsasDeCemento = area*CEMENTO;
    var bolsasDeCal = area*CAL;
    alert ("Se necesitan " +Math.ceil(bolsasDeCemento) + " bolsas de cemento y " + Math.ceil(bolsasDeCal) + " bolsas de cal");
}