function mostrar()
{
	var xd = Math.floor(Math.random()*11);

	if(xd>=9) alert("Su nota es: " +xd +" EXCELENTE");
	else if( xd<9 && xd>= 4) alert("Su nota es: " +xd +" APROBÓ");
	else alert ("Su nota es: " +xd +" Vamos, la proxima se puede");

}