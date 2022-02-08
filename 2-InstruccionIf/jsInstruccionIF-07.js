function mostrar()
{
	//tomo la edad  
	var estadoCivil= document.getElementById("estadoCivil").value;
	var edad= document.getElementById("txtIdEdad").value;

	if(edad < 18 && estadoCivil != "Soltero")
	{
		alert("Es muy pequeño para NO ser soltero");
}

	



}//FIN DE LA FUNCIÓN