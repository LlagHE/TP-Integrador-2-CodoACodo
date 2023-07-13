var BotonResumen = document.getElementById("BtnResumen");
var ResumenMonto = document.getElementById("Resumen");

if (BotonResumen != null) {
    BotonResumen.addEventListener("click", calcularMonto);
    console.log("btn != null");
}

function calcularMonto() {
    const cat = document.getElementById('categoriaDescuento').value;
    const tickets = document.getElementById('cantidadTickts').value;
    var cantTickets = Math.floor(tickets);
    var monto = 0;
    
    if (tickets > 0) {
        monto = cantTickets * 200;

        switch (cat) {
            case 'Estudiante': {
                monto = monto * 0.8;
                break
            }
            case 'Trainee': {
                monto = monto * 0.5;
                break
            }
            case 'Junior': {
                monto = monto * 0.15;
                break
            }
        }
    } 
    
    ResumenMonto.value = ("Total a Pagar: $" + monto);
}