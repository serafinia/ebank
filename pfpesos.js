let saldo = localStorage.getItem('saldo');
document.getElementById('saldo').innerHTML = saldo;
let mensaje = 'Luego de 365 días usted tendrá ';
let calcularPfPesos = document.getElementById('calcularPfPesos');

calcularPfPesos.addEventListener("click", calcular);
calcularPfPesos.addEventListener("keypress", calcular)

function calcular(e){
    e.preventDefault()
    let montoPesos = parseInt(document.getElementById('monto_t').value);
    let resultado = '' ; 
    let resultadoError = '' ;
    
    saldo >= montoPesos ? resultado = (document.getElementById('transferir').innerHTML = mensaje + (Math.trunc(0.39 * montoPesos + montoPesos))) : resultadoError = (document.getElementById('transferir').innerHTML = 'ha ocurrido un error inesperado');

}