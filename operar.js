let username = '';
username = localStorage.getItem('username')
document.getElementById('userNameBienvenida').innerHTML = '¡Bienvenido ' + username + ' a E-BANK!';