//iniciar sesion
fetch("/data.json")
    .then( (res) => res.json())
    .then( (data) => {
        data.forEach((username, password, saldo) => {
            
            let signIn = document.getElementById('signIn');
            signIn.addEventListener("click", ingresar);
            signIn.addEventListener("keypress", ingresar);

            function ingresar (e){
                e.preventDefault()
                username = document.getElementById('user').value;
                password = document.getElementById('password').value;
                for (let i=0; i < data.length; i++){
                    if ((username === data[i].username) && (password === data[i].password)){
                        location.href = "operar.html";
                        username = localStorage.setItem('username', username);
                        saldo = localStorage.setItem('saldo', data[i].saldo);
                        break;
                    }
                    else{
                        document.getElementById('signInError').innerHTML = 'Su usuario y/o contraseña ingresados no son válidos.';
                    } 
                } 
            } 
        })
    })        



//boton mostrar contraseña
function mostrarContrasena(){
    var tipo = document.getElementById("password");
    if(tipo.type == "password"){
        tipo.type = "text";
    }else{
        tipo.type = "password";
    }
}


//Como ingresar
/* const lista = document.querySelector('#listado')
let comoIngresar = document.getElementById('listado-ingreso');
comoIngresar.addEventListener("click", fetch);
comoIngresar.addEventListener("keypress", fetch);
fetch("/data.json")
    .then( (res) => res.json())
    .then( (data) => {
        console.log(data)
         data.forEach((cliente) => {
            const li = document.createElement('li')
            li.innerHTML = `
                <h4>${cliente.user}</h4>
                <p>${cliente.password}</p>
                <p>Código: ${cliente.id}</p>
                <hr/>
            `
   
            lista.append(li)
        }) 
    }) */

