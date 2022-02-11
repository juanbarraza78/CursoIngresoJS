/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{ 
	var temperatura = document.getElementById("txtIdTemperatura").value;
    temperatura = parseFloat(temperatura);
    var fahrenheitACentigrados = (temperatura-32)*5/9;
    alert (temperatura + " Fahrenheit son "+fahrenheitACentigrados.toFixed(2)+" centígrados");
}

function CentigradosFahrenheit () 
{
	var temperatura = document.getElementById("txtIdTemperatura").value;
    temperatura = parseFloat(temperatura);
    var centigradosAFahrenheit = (temperatura*9/5)+32;
    alert (temperatura + " centígrados son "+centigradosAFahrenheit.toFixed(2)+" Fahrenheit");
}
