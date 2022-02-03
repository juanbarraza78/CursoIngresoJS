/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	let datoIngresado= prompt("Ingrese dato: ");
	document.getElementById("txtIdNombre").value=datoIngresado;
	
	/*datoIngresado=document.getElementById("txtIdNombre").value esto es un get;
	document.getElementById("txtIdNombre").value=datoIngresado esto es un set;
    el de la izquierda recibe el valor y el de la derecha da el valor*/
}

