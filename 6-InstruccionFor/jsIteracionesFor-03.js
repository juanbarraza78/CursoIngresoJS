/* al presionar el botón pedir la cantidad de veces que quiero repetir el mensaje "Hola UTN FRA" */
function mostrar() {
	var repeticiones = parseInt(prompt("Ingrese el numero de repeticiones "));
	for (let i = 0 ; i < repeticiones ; i++){
		alert("Hola UTN FRA");
	}
}