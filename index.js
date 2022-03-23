const btn = document.getElementById('button');

document.getElementById('form')
.addEventListener('submit', function(event) {
    event.preventDefault();

    btn.value = 'Enviando...';

    const serviceID = 'default_service';
    const templateID = 'ebank-contacto';

    emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
        btn.value = 'Enviar';
        document.getElementById('sendEmail').innerHTML = 'Hemos enviado un mensaje a su correo';
    }, (err) => {
        btn.value = 'Enviar';
        document.getElementById('sendEmail').innerHTML = 'No hemos podido enviar su mensaje correctamente.' + JSON.stringify(err);
    });
});