let calcularPrestamo = document.getElementById('calcularPrestamo');
calcularPrestamo.addEventListener("click", prestar);
calcularPrestamo.addEventListener("keypress", prestar);
function prestar(e){
    e.preventDefault()
    let montoPrestamo = parseInt(document.getElementById('monto_t').value);
    let resultado = '' ; 
    let interes6 = 0.30;
    let interes12 = 0.50;
    let interes18 = 0.75;
    let interes24 = 0.95;
    let nuevoPrestamo = '';
    let resultadoError = '' ;
    if (montoPrestamo >= 10000){
        let cantCoutas = parseInt (document.getElementById ('monto_c').value);
        if (cantCoutas <= 6 && cantCoutas != 0){         
            resultado = document.getElementById('transferir').innerHTML = 'Usted deberá abonar ' +(Math.trunc(interes6*montoPrestamo + montoPrestamo)) + ' en ' + cantCoutas +' coutas de ' + (Math.trunc((interes6*montoPrestamo + montoPrestamo)/cantCoutas)+1);
        }
        else if (cantCoutas > 6 && cantCoutas <= 12){
            resultado = document.getElementById('transferir').innerHTML = 'Usted deberá abonar ' +(Math.trunc(interes12*montoPrestamo + montoPrestamo)) + ' en ' + cantCoutas +' coutas de ' + (Math.trunc((interes12*montoPrestamo + montoPrestamo)/cantCoutas)+1);
        }
        else if (cantCoutas > 12 && cantCoutas <= 18){
            resultado = document.getElementById('transferir').innerHTML = 'Usted deberá abonar ' +(Math.trunc(interes18*montoPrestamo + montoPrestamo)) + ' en ' + cantCoutas +' coutas de ' + (Math.trunc((interes18*montoPrestamo + montoPrestamo)/cantCoutas)+1);
        }
        else if (cantCoutas > 18 && cantCoutas <= 24){
            resultado = document.getElementById('transferir').innerHTML = 'Usted deberá abonar ' +(Math.trunc(interes24*montoPrestamo + montoPrestamo)) + ' en ' + cantCoutas +' coutas de ' + (Math.trunc((interes24*montoPrestamo + montoPrestamo)/cantCoutas)+1);
        }
        else{
            resultadoError = document.getElementById('transferir').innerHTML = 'Ha ocurrido un error, intentelo nuevamente'
        } 
    }
    else {
        resultadoError = document.getElementById('transferir').innerHTML = 'Ha ocurrido un error, intentelo nuevamente'
    }
}

