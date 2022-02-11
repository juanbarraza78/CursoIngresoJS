function mostrar()
{
	var edad = document.getElementById("txtIdEdad").value;
    edad = parseInt(edad);
    if(edad >= 18)
    {
        alert("Usted es mayor de edad");
    }
	

}