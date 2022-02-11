function mostrar()
{
	var estadoCivil = document.getElementById("estadoCivil").value;
	var edad = parseInt(document.getElementById("txtIdEdad").value);

	if(edad < 18 && estadoCivil != "Soltero")
	{
		alert("Es muy pequeño para NO ser soltero");
	}

}