/* al seleccionar un mes informar.
si tiene 28 días.
si tiene 30 días.
si tiene 31 días. */
function mostrar() {
  var mes = document.getElementById("txtIdMes").value;
  switch (mes) {
    case "Febrero":
      alert("tiene 28 días.");
      break;
    case "Noviembre":
    case "Septiembre":
    case "Junio":
    case "Abril":
      alert("tiene 30 días");
      break;
    default:
      alert("tiene 31 días");
  }
}