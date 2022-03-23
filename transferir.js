let saldo = localStorage.getItem('saldo');
document.getElementById('saldo').innerHTML = saldo;
let mensajeOK = 'Su transferencia se ha realizado correctamente';
let mensajeError= 'No se ha podido realizar su transferencia'
let enviarTransf = document.getElementById('enviarTransf');
enviarTransf.addEventListener("click", transferirOK);
enviarTransf.addEventListener("keypress", transferirOK);
function transferirOK(){
    let retiro = parseInt(document.getElementById('monto_t').value); 
    if (retiro <= saldo &&  retiro > 0 && retiro != 0){ 
        swal({
            title: "¿Esta seguro que desea realizar esta transferencia?",
            buttons: {
                cancel: true,
                confirm: true,
              },
            })
            .then((willDelete) => {
            if (willDelete) {
                swal("Su transferencia se ha realizado correctamente", {
                icon: "success",
                });
                /* setTimeout(() => {
                window.location.href = "transferir.html"},
                10000
                ) */
            } 
        })
    }
    else if (saldo <= retiro){
        swal({
            title: "Su saldo es insuficiente",
            text: "Vuelva a intentarlo nuevamente",
            icon: "error",
            button: "Nueva transeferencia"
           
        })
    }
    else{
        swal({
            title: "Ha ocurrido un error inesperado",
            text: "Vuelva a intentarlo nuevamente",
            icon: "error",
        });
    }
    
} 
