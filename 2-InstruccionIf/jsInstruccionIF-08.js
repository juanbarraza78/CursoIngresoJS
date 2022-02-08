function mostrar()
{
	//tomo la edad  
	var estadoCivil= document.getElementById("estadoCivil").value;
	var edad= document.getElementById("txtIdEdad").value;

	if(edad >= 18 && estadoCivil == "Soltero")
	{
		alert("Ya sos mayor y virgo man");
	}


}//FIN DE LA FUNCIÓN