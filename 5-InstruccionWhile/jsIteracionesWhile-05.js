/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar() {
	var sexoIngresado;
	sexoIngresado = prompt("ingrese f ó m .").toLowerCase();
	// .toLowerCase() me hace el string todo en minuscula pero no lo guarda

	while (sexoIngresado != 'f' && sexoIngresado != 'm'){
		sexoIngresado = prompt("ingrese f ó m .").toLowerCase();
	}

	if (sexoIngresado == "f") {
		document.getElementById("txtIdSexo").value = "Femenino";
	}
	else {
		document.getElementById("txtIdSexo").value = "Masculino";
	}
}