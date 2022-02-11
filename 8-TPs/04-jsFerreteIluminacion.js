/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
 	var cantidadDeLamparas = parseInt(document.getElementById("txtIdCantidad").value);
    var marca = document.getElementById("Marca").value;
    var precioLampara = 35;
    var precioDescuento;
    var precioTotalDeLamparas = precioLampara*cantidadDeLamparas;
   
// 6 LAMPARAS
    if(cantidadDeLamparas >= 6){
        precioDescuento = precioTotalDeLamparas/2;}
// 5 LAMPARAS
    else if(cantidadDeLamparas == 5){
        if(marca == "ArgentinaLuz")
        {
            precioDescuento = 0.60*precioTotalDeLamparas;
        }
        else 
        {
            precioDescuento = 0.70*precioTotalDeLamparas;    
        }  
    }
// 4 LAMPARAS
    else if(cantidadDeLamparas == 4){
        if(marca == "ArgentinaLuz" || marca == "FelipeLamparas")
        {
            precioDescuento = 0.75*precioTotalDeLamparas;
        }
        else 
        {
            precioDescuento = 0.80*precioTotalDeLamparas;
        }
    }
//  3 LAMPARAS 
    else if(cantidadDeLamparas == 3){
        if(marca == "ArgentinaLuz")
        {
            precioDescuento = 0.85*precioTotalDeLamparas;
        }
        else if(marca == "FelipeLamparas")
        {
            precioDescuento = 0.90*precioTotalDeLamparas;
        }
        else
        {
            precioDescuento = 0.95*precioTotalDeLamparas;
        }
    }
    else{
        precioDescuento = precioTotalDeLamparas;
    }

    document.getElementById("txtIdprecioDescuento").value = precioDescuento

    if(precioDescuento>120){
        precioDescuento = precioDescuento*1.1;
        alert ("Usted pago " + precioDescuento + " de IIBB");
    }
}
