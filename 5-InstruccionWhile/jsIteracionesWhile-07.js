/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar(){
	var contador = 0;
	var acumulador = 0;
	var numeroIngresado = 0;

	var respuesta = prompt("Quiere agregar un numero? (SI/NO)").toLowerCase();

	while(respuesta == "si")
	{
		numeroIngresado = parseInt(prompt("Ingrese numero: "));
		respuesta=prompt("Agregar otro numero? (SI/NO)").toLowerCase();
		acumulador += numeroIngresado;
		contador ++;
	}
	document.getElementById("txtIdSuma").value=acumulador;
	document.getElementById("txtIdPromedio").value=acumulador/contador;
}