/* Al selecionar un destino , indicar el punto cardinal de nuestro pais en donde se encuentra Norte, Sur, Este u Oeste*/
function mostrar() {
	puntosCardinales = document.getElementById("txtIdDestino").value;
	mensage = ""
	switch (puntosCardinales) {
		case "Bariloche":
			mensage = "OESTE";
			break;
		case "Cataratas":
			mensage = "NORTE";
			break;
		case "Mar del plata":
			mensage = "ESTE";
			break;
		case "Ushuaia":
			mensage = "SUR";
			break;
	}
	alert (mensage);
}