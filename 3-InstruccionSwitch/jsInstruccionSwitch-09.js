/* una agencia de viajes debe sacar las tarifas de los viajes , se cobra $15.000 por cada estadia como base, se pide el ingreso de una estacion del año y localidad para vacacionar para poder calcular el precio final

en Invierno: bariloche tiene un aumento del 20% cataratas y Cordoba tiene un descuento del 10% Mar del plata tiene un descuento del 20%

en Verano: bariloche tiene un descuento del 20% cataratas y Cordoba tiene un aumento del 10% Mar del plata tiene un aumento del 20%

en Otoño y Primavera: bariloche tiene un aumento del 10% cataratas tiene un aumento del 10% Mar del plata tiene un aumento del 10% y  Cordoba tiene el precio sin descuento */
function mostrar() {
	destinos = document.getElementById("txtIdDestino").value;
	estacionesDelAnio = document.getElementById("txtIdEstacion").value;
	const BASE = 15000;
	var descuento;
	switch (estacionesDelAnio) {
		case "Invierno":
			switch (destinos) {
				case "Bariloche":
					descuento = 1.20;
					break;
				case "Cataratas":
				case "Cordoba":
					descuento = 0.9;
					break;
				case "Mar del plata":
					descuento = 0.8;
					break;
			}
			break;
		case "Verano":
			switch (destinos) {
				case "Bariloche":
					descuento = 0.8;
					break;
				case "Cataratas":
				case "Cordoba":
					descuento = 1.1;
					break;
				case "Mar del plata":
					descuento = 1.2;
					break;
			}
			break;
		case "Otoño":
		case "Primavera":
			switch (destinos) {
				case "Bariloche":
				case "Cataratas":
				case "Mar del plata":
					descuento = 1.1;
					break;
				case "Cordoba":
					descuento = 1;
					break;
			}
			break;
	}
	alert("El precio es: " + (BASE * descuento));
}