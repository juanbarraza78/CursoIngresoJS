/* al presionar el botón pedir un número. mostrar los numeros pares desde el 1 al número ingresado, y mostrar la cantidad de numeros pares encontrados. */
function mostrar() {
	let numerosPares = 0;
	let repeticiones = parseInt(prompt("Ingrese un numero"));
	for (let i = 1; i <= repeticiones; i++) {
		if (i % 2 == 0) {
			numerosPares ++;
			console.log(i);
		}
	}
	alert("la cantidad de numeros pares son: " + numerosPares);
}