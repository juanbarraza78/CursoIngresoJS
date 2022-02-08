/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	var ingreseNombre = document.getElementById("txtIdNombre").value;
	var ingleseEdad = document.getElementById("txtIdEdad").value;
	alert("Usted se llama "+ingreseNombre+" y tiene "+ingleseEdad+" años");
}