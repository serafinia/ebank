let saldo = localStorage.getItem('saldo');
document.getElementById('saldo').innerHTML = saldo;
let mensaje = 'Luego de 365 días usted tendrá ';
let calcularPfUsd = document.getElementById('calcularPfUsd');
calcularPfUsd.addEventListener("click", calcular);
calcularPfUsd.addEventListener("keypress", calcular);
function calcular(e){
    e.preventDefault()
    let montoUsd = parseInt(document.getElementById('monto_t').value);
    let resultado = '' ; 
    let resultadoError = '' ;  
    saldo >= montoUsd ? resultado = (document.getElementById('transferir').innerHTML = mensaje + (Math.trunc(0.005 * montoUsd + montoUsd))) : resultadoError = (document.getElementById('transferir').innerHTML = 'ha ocurrido un error inesperado');
}

