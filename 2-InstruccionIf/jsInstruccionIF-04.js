function mostrar()
{
	var edad = document.getElementById("txtIdEdad").value;

    edad = parseInt(edad);

    if(edad >= 13 && edad <= 17)
    {
        alert("Usted es adolencente");
    }
	
	

}//FIN DE LA FUNCIÓN