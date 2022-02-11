function mostrar()
{
	var numeroRandom = Math.floor(Math.random() * 10) + 1;
	var anuncio = ""

	if(numeroRandom>=9)
	{ 
		anuncio = numeroRandom + " EXCELENTE";
	}
	else if(numeroRandom>= 4) 
	{
		// Pones solo una condicion porque ya te lo limita el if anterior la otra condicion ya que es en orden numeroRandom<=8
		anuncio = numeroRandom + " APROBÓ";
	}
	else 
	{
		anuncio = numeroRandom + " Vamos, la proxima se puede";
	}
	alert ("Su nota es: " + anuncio);
	
	// Math.ceil redondea siempre para arriva
	// Math.floor redondea siempre para abajo
	// Math.round redondea dependiendo del decimal si es mayor a 5 redondea para arriva sino va para abajo
} 