Enunciado:
/* una agencia de viajes nos piden informar si hacemos viajes a lugares según la estación del año estemos, informar si "Se viaja" o "No se viaja" a ese lugar

en Invierno: Solo Bariloche informa "se viaja" los demas destinos "No se viaja"

en Verano: Se viaja a Mar del plata y Cataratas solamente

en Otoño: Se viaja a todos los destinos.

primavera: solo no se viaja a Bariloche */
function mostrar() {
	destinos = document.getElementById("txtIdDestino").value;
	estacionesDelAnio = document.getElementById("txtIdEstacion").value;
	switch (estacionesDelAnio) {
		case "Invierno":
			switch (destinos) {
				case "Bariloche":
					alert("Se viaja");
					break;
				default:
					alert("No se viaja");
					break;
			}
			break;
		case "Verano":
			switch (destinos) {
				case "Cataratas":
				case "Mar del plata":
					alert("Se viaja");
					break;
				default:
					alert("No se viaja");
					break;
			}
			break;
		case "Otoño":
			alert("Se viaja");
			break;

		case "Primavera":
			switch (destinos) {
				case "Bariloche":
					alert("No se viaja");
				default:
					alert("Se viaja");
				break;
			}
			break;
	}
}