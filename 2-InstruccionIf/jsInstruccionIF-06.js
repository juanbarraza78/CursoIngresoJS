function mostrar()
{
	var edad = document.getElementById("txtIdEdad").value;
    edad = parseInt(edad);
	if(edad<13) 
	{
		alert("Sos un niño");
	}
	else if(edad >= 13 && edad <= 17) 
	{
		alert("Sos un adolescente");
	}
	else
	{
		alert("Sos mayor de edad");
	}

}