/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var numeroUno = document.getElementById("txtIdNumeroUno").value;
	var numeroDos = document.getElementById("txtIdNumeroDos").value;
	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);
	var suma = numeroUno+numeroDos;
	alert ("la suma es: "+suma);
}

function restar()
{
	var numeroUno = document.getElementById("txtIdNumeroUno").value;
	var numeroDos = document.getElementById("txtIdNumeroDos").value;
	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);
	var resta = numeroUno-numeroDos;
	alert ("la resta es: "+resta);
}

function multiplicar()
{ 
	var numeroUno = document.getElementById("txtIdNumeroUno").value;
	var numeroDos = document.getElementById("txtIdNumeroDos").value;
	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);
	var multiplicar = numeroUno*numeroDos;
	alert ("la multiplicacion es: "+multiplicar);
}

function dividir()
{
	var numeroUno = document.getElementById("txtIdNumeroUno").value;
	var numeroDos = document.getElementById("txtIdNumeroDos").value;
	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);
	var dividir = numeroUno/numeroDos;
	alert ("la divicion es: "+dividir);
}

