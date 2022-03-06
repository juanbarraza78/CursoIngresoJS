/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar() {
	var sumaNegativos = 0;
	var sumaPositivos = 0;
	var cantidadDeNegativos = 0;
	var cantidadDePositivos = 0;
	var cantidadDeCeros = 0;
	var cantidadDeNumerosPares = 0;
	var promedioDeNegativos = 0;
	var promedioDePositivos = 0;
	var numeroIngresado;
	var respuesta = prompt("Quiere ingresar numeros? (SI/NO)").toLowerCase();
	var banderaPositivos = 0;
	var banderaNegativos = 0;


	while (respuesta == "si") {
		numeroIngresado = parseFloat(prompt("Ingrese numero: "));
		if (numeroIngresado > 0) {
			sumaPositivos += numeroIngresado;
			cantidadDePositivos++;
			banderaPositivos = 1;

		}
		else if (numeroIngresado < 0) {
			sumaNegativos += numeroIngresado;
			cantidadDeNegativos++;
			banderaNegativos = 1;
		}
		else {
			cantidadDeCeros++;
		}
		if (numeroIngresado % 2 == 0) {
			cantidadDeNumerosPares++;
		}
		respuesta = prompt("desea continuar?(SI/NO)").toLowerCase();
	}
	
	promedioDeNegativos = sumaNegativos / cantidadDeNegativos;
	promedioDePositivos = sumaPositivos / cantidadDePositivos;

	if (banderaNegativos == 0) {
		promedioDeNegativos = "No hay";
	}
	if (banderaPositivos == 0) {
		promedioDePositivos = "No hay";
	}

	document.write("Suma positivos: " + sumaPositivos);
	document.write("// Suma negativos: " + sumaNegativos);
	document.write("// Cantidad de negativos: " + cantidadDeNegativos);
	document.write("// Cantidad de positivos: " + cantidadDePositivos);
	document.write("// Cantidad de ceros: " + cantidadDeCeros);
	document.write("// Cantidad de pares: " + cantidadDeNumerosPares);
	document.write("// Promedio de positivos: " + promedioDePositivos);
	document.write("// Promedio de negativos: " + promedioDeNegativos);
	document.write("// Diferencia entre positivos y negativos: " + (sumaPositivos - sumaNegativos));
	// "<br>" para saltar linea
	// isNaN() te dice si la variable es nan o no
	
}