//SIMULADOR DE COMPRAS DE ELECTRODOMESTICOS


const precioMicroondas = 70000;
const precioPavaelectrica = 40000;

function descuentoEfectivo(precioDescuento){
    let descuentoCash = (precioDescuento) - (precioDescuento * 0.15);
    return descuentoCash;
}

function ivaFactura(precioFactura) {
    let ivaSumado = precioFactura * 1.21;
    return ivaSumado
}


let compra = prompt("Bienvenido!\nPor favor seleccione el electrodomestico que desea comprar: \n1 - Microondas \n2 - Pava Electrica")

if(compra == 1) {
    alert("Usted quiere comprar un microondas y su precio es: $" +precioMicroondas)
    let opcion = prompt("Por favor, elija el medio de pago \n1 - Efectivo \n2 - Tarjeta");
    if (opcion == 1) {
        let descuentoMicroondas = precioMicroondas
        let descuento = descuentoEfectivo(descuentoMicroondas);
        alert("Usted tiene un descuento del 15% en efectivo y su total a pagar es de $" +descuento+ "\nAl hacerlo por este medio no le emitiremos factura.");
    }else{
        alert("Al pagar con tarjeta usted no cuenta con descuento y el total es $" +precioMicroondas)
        let opcionFactura = prompt("Desea que su compra sea facturada? Elija la opcion 1 si quiere factura o la opcion 2 si no lo desea. Tenga en cuenta que al facturarse se le debe sumar el IVA al importe original.")
        if (opcionFactura == 1) {
            let facturaMicroondas = precioMicroondas;
            let ivaMicroondas = ivaFactura(facturaMicroondas);
            alert("El precio de su producto facturado es de: $" +ivaMicroondas+ "\nGracias por tu compra.")
        } else {
            alert("Gracias por tu compra.")
        }
    
    
    }
    
}else if(compra == 2){
    alert("Usted quiere comprar Pava electrica y su precio es: $" +precioPavaelectrica)
    let opcion = prompt("Por favor, elija el medio de pago \n1 - Efectivo \n2 - Tarjeta");
    if (opcion == 1) {
        let descuentoPava = precioPavaelectrica;
        let descuento = descuentoEfectivo(descuentoPava);
        alert("Usted tiene un descuento del 15% en efectivo y su total a pagar es de $" +descuento);
    }else{
        alert("Al pagar con tarjeta usted no cuenta con descuento y el total es $" +precioPavaelectrica)
        let opcionFactura = prompt("Desea que su compra sea facturada? Elija la opcion 1 si quiere factura o la opcion 2 si no lo desea. Tenga en cuenta que al facturarse se le debe sumar el IVA al importe original.")
        if (opcionFactura == 1) {
            let facturaPava = precioPavaelectrica;
            let ivaPava = ivaPava(facturaPava);
            alert("El precio de su producto facturado es de: $" +ivaPava+ "\nGracias por tu compra.")
        } else {
            alert("Gracias por tu compra.")
        }
    }
}else{
    alert("Usted no ha seleccionado nada, por favor recargue la pagina");
}
