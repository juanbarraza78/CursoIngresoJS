/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	var sueldo = document.getElementById("txtIdSueldo").value;
	sueldo = parseInt(sueldo);
	var resultado = sueldo*1.1;
	document.getElementById("txtIdResultado").value=resultado;
}
