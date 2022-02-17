/* Al seleccionar un destino informar si hace FRIO o CALOR en ese destino */
function mostrar() {
	destino = document.getElementById("txtIdDestino").value;
	mensage = ""
	switch (destino) {
		case "Cataratas":
		case "Mar del plata":
			mensage = "hace CALOR";
			break;
		case "Ushuaia":
		case "Bariloche":
			mensage = "hace FRIO";
			break;
	}
	alert(mensage);
}