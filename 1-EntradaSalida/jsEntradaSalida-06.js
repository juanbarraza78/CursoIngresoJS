/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	var numeroUno = document.getElementById("txtIdNumeroUno").value;
	var numeroDos = document.getElementById("txtIdNumeroDos").value;
	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);
	var suma = numeroUno+numeroDos;
	alert ("la suma es: "+suma);
	// parseInt me convierte el valor del id y me lo transforma a numero con el que puedo interatuar con +-/* etc.
	
}


