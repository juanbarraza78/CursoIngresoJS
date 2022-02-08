/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var productoUno = document.getElementById("txtIdPrecioUno").value;
    var productoDos = document.getElementById("txtIdPrecioDos").value;
    var productoTres = document.getElementById("txtIdPrecioTres").value;
    productoUno=parseFloat(productoUno);
    productoDos=parseFloat(productoDos);
    productoTres=parseFloat(productoTres);
    var suma = productoUno+productoDos+productoTres;
    alert("la suma es: "+suma.toFixed(2));   
}
function Promedio () 
{
    var productoUno = document.getElementById("txtIdPrecioUno").value;
    var productoDos = document.getElementById("txtIdPrecioDos").value;
    var productoTres = document.getElementById("txtIdPrecioTres").value;
    productoUno=parseFloat(productoUno);
    productoDos=parseFloat(productoDos);
    productoTres=parseFloat(productoTres);
    var suma = productoUno+productoDos+productoTres;
    var promedio = suma/3;
    alert("El promedio es: "+promedio.toFixed(2));
}
function PrecioFinal () 
{
    var productoUno = document.getElementById("txtIdPrecioUno").value;
    var productoDos = document.getElementById("txtIdPrecioDos").value;
    var productoTres = document.getElementById("txtIdPrecioTres").value;
    productoUno=parseFloat(productoUno);
    productoDos=parseFloat(productoDos);
    productoTres=parseFloat(productoTres);
    var suma = productoUno+productoDos+productoTres;
    var precioFinal = suma*1.21;
    alert("El precio es: "+precioFinal.toFixed(2));	
    // precioFinal=precioFinal.toFixed(2)  toFixed te dice cuantos numeros despues de la coma va pero te lo convierte en str
}