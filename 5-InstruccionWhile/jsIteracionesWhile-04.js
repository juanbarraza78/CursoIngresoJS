/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	var clave = prompt("Numero entre 0 y 9 ");
	while (clave >= 9 || clave <= 0 ) 
	{
		clave = prompt("Numero entre 0 y 9 (=");
	}
	document.getElementById("txtIdNumero").value = clave
}