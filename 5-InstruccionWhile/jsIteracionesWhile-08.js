/*
Al presionar el botón pedir números hasta que el usuario quiera, sumar los que son positivos y multiplicar los negativos.*/
function mostrar() {
    var numeroIngresado;
    var suma = 0;
    var multiplicacion = 1;
    var continuar = prompt("Quiere ingresar un numero (SI/NO) ").toLowerCase();

    while (continuar == "si") {
        numeroIngresado = parseInt(prompt("Ingrese un numero: "));
        if (numeroIngresado >= 0) {
            suma += numeroIngresado;
        }
        else {
            multiplicacion *= numeroIngresado;
        }
        continuar = prompt("Desea continuar ingresando numero ? (SI/NO) ").toLowerCase();
    }
    document.getElementById("txtIdSuma").value = suma;
    document.getElementById("txtIdProducto").value = multiplicacion;
}