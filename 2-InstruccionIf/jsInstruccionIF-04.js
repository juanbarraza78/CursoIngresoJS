function mostrar()
{
	var edad = document.getElementById("txtIdEdad").value;

    edad = parseInt(edad);

    if(edad >= 13 && edad <= 17)
    {
        alert("Usted es adolencente");
    }
	
	/*
    OPERADORES LOGICOS:
    && (y) las 2 condiciones tienen que ser ciertas para que me de true
    || (o) con que una condicion sea cierta ya me da true
    */

}//FIN DE LA FUNCIÓN