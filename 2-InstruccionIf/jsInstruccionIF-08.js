function mostrar()
{
  
	var estadoCivil= document.getElementById("estadoCivil").value;
	var edad= document.getElementById("txtIdEdad").value;

	if(edad >= 18 && estadoCivil == "Soltero"){
		alert("Es soltero y no es menor");
	}


}