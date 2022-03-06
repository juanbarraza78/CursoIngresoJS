function mostrar()
{
	var contador = 0;
	var acumulador = 0;
	var numeroIngresado;


	while(contador < 5)
	{
		numeroIngresado=parseInt(prompt("Ingrese numero: "));
		acumulador += numeroIngresado;
		contador ++;
	}
	document.getElementById("txtIdSuma").value=acumulador;
	document.getElementById("txtIdPromedio").value=acumulador/contador;
}