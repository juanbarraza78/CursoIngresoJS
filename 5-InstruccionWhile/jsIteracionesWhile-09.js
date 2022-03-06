/*
Al presionar el botón pedir números hasta que el usuario quiera, mostrar el número máximo y el número mínimo ingresado.*/
function mostrar() {
	var banderaDelPrimero;
	var numeroIngresado;
	var numeroMaximo ;
	var numeroMinimo ;
	var respuesta;
	banderaDelPrimero = 0; //no se para que sirve
	respuesta = 'si';

	respuesta = prompt("Desea ingresar un numero?(NO/SI)").toLowerCase();

	while (respuesta == "si") {
		numeroIngresado =parseInt(prompt("Ingrese un numero: "));
		if(banderaDelPrimero == 0){
			numeroMinimo = numeroIngresado;
			numeroMaximo = numeroIngresado;
			banderaDelPrimero = 1;
		}

		if (numeroIngresado < numeroMinimo) {
			numeroMinimo = numeroIngresado;
		}
		else if (numeroIngresado > numeroMaximo) {
			numeroMaximo = numeroIngresado;
		}
		respuesta = prompt("Desea ingresar otro numero?(SI/NO)").toLowerCase();
	}

	document.getElementById("txtIdMinimo").value = numeroMinimo;
	document.getElementById("txtIdMaximo").value = numeroMaximo;
}