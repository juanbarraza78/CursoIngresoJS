/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	var contador = 0;
	var acumulador = 0;
	var numeroIngresado = 0;
	var respuesta = "si";


	while(numeroIngresado!="si")
	{
		contador = contador + 1;
		acumulador=parseInt(numeroIngresado)+acumulador;
		numeroIngresado=prompt("Ingrese numero: ");
	}
	
	document.getElementById("txtIdSuma").value=acumulador;
	document.getElementById("txtIdPromedio").value=acumulador/(contador-1);
}