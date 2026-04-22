//validacion del email
function validarEmail(email){
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

//base de datos simulada
let users = JSON.parse(localStorage.getItem("users")) || [];

//registro
const REG = document.getElementById("form-reg");
REG.addEventListener("submit", function(e){
    e.preventDefault();

    const inputs = REG.querySelectorAll("input");
    const name = inputs[0].value.trim();
    const email = inputs[1].value.trim();
    const pass = inputs[2].value.trim();

    //validacion basica 
    if(!name || !email || !pass){
        alert("todos los campos son obligatorios");
        return;
    }

    //validacion correo
    if(!validarEmail(email)){
        alert("ingresa un correo valido");
        return;
    }

    //verificar si ya existe el usuario
    const userExist = users.find(u => u.email === email);

    if(userExist){
        alert("este correo ya esta registrado");
        return;
    }

    //guardar usuario 
    const newUser = {
        name, email, pass
    };

    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    alert("registro exitoso");

    REG.reset();

    //cambiar a login
    window.location.hash = "#login";
});

//login 
const LOG = document.getElementById("form-log");

LOG.addEventListener("submit", function(e){
    e.preventDefault();

    const inputs = LOG.querySelectorAll("input") 
    const email = inputs[0].value.trim();  
    const pass = inputs[1].value.trim();

    //validacion basica 
    if(!email || !pass){
        alert("completa todos los campos");
        return;
    }

    //validacion de correo
    if(!validarEmail(email)){
        alert("ingresa un correo valido");
        return;
    }

    //buscar usuario
    const userFound = users.find(u => u.email === email && u.pass === pass);

    if(!userFound){
        alert("usuario o contraseña incorrectos");
        return;
    }

    //guardar sesion 
    localStorage.setItem("sessionUser", JSON.stringify(userFound));

    alert("bienvenido "+userFound.name);

    //redireccion simulada (opcional)
    window.location.href = "index.html"
});