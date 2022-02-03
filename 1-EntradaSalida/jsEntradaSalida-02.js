/*
Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	var apellido ;
	let nombre ;
		// var variable global y let variable local
	nombre = prompt('Cual es tu nombre? ');
	apellido = prompt('Cual es tu apellido? ');
	//  prompt crea un imput para el usuario
	alert("Tu nombre es: "+ nombre + " " + apellido );
	//  alert(`Tu nombre es ${nombre} ${apellido}`) ; otra forma de poner lo mismo 
}