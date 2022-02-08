/*
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	var nombreIngresado = document.getElementById("txtIdNombre").value;
	alert(nombreIngresado);
	// (elemento a asignarle un valor) = (el valor asignado)
	// .value me da el valor del elemento que busco
	// document.getElementById("txtIdNombre") esto busca el elemento por id de algun objeto del HTML

}