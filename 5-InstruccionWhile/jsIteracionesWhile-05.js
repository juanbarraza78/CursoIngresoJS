/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar() {
	var sexoIngresado = 0;

	while (sexoIngresado != 'f' && sexoIngresado != 'm') {
		sexoIngresado = prompt("ingrese f ó m .");
	}
	if (sexoIngresado == "f") {
		document.getElementById("txtIdSexo").value = "Femenino";
	}
	else {
		document.getElementById("txtIdSexo").value = "Masculino";
	}
}