function getCarrito(){
    return JSON.parse(localStorage.getItem("carrito")) || [];
}

function saveCarrito(carrito){
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

//normalizar anti errores 
function normCarrito(){
    let carrito = getCarrito();

    carrito = carrito.map(p => ({
        ...p,
        cantidad: (parseInt(p.cantidad) || 1)
    }));

    saveCarrito(carrito);

    return carrito;
}

//contador global
function actCont(){
    let carrito = normCarrito();
    let total = 0;

    carrito.forEach(p => total += p.cantidad);

    const contador = document.getElementById("contador-carrito");

    if(contador){
        contador.textContent = total;
    }
}

//render 
function renderCarrito(){
    const contenedor = document.getElementById("lista-carrito");
    let carrito = normCarrito();

    contenedor.innerHTML = "";

    carrito.forEach(p => {
        contenedor.innerHTML += `
            <div class="producto">
                <img src="${p.img}">
                <div class="info">
                    <h3>${p.titulo}</h3>
                    <p class="precio">$${p.precio}</p>
                    <div class="cantidad">
                        <button onclick="cambiarCant(${p.id}, -1)">-</button>
                        <span>${p.cantidad}</span>
                        <button onclick="cambiarCant(${p.id}), 1">+</button>
                    </div>

                    <span class="eliminar" onclick="delProd(${p.id})">eliminar</span>
                </div>
            </div>
        `;
    });

    actResumen();
}

//cambiar cantidad
function cambiarCant(id, cambio){
    let carrito = getCarrito();

    carrito = carrito.map(p => {
        if(p.id === id){
            p.cantidad = (parseInt(p.cantidad) || 0) + cambio;

            if(p.cantidad < 1){
                p.cantidad = 1;
            }
        }
        return p;
    });

    saveCarrito(carrito);

    renderCarrito();
    actCont();
}

//eliminar
function delProd(id){
    let carrito= getCarrito();

    carrito = carrito.filter(p => p.id !== id);

    saveCarrito(carrito);

    renderCarrito();
    actCont();
}

//resumen 
function actResumen(){
    let carrito = getCarrito();
    let totalprod = 0;
    let subtotal = 0;

    carrito.forEach(p => {
        totalprod += p.cantidad || 1;
        subtotal += p.precio * (p.cantidad || 1);
    });

    const resumen = document.getElementById("resumen");

    resumen.innerHTML = `
        <h3>Resumen de compra</h3>
        <p>Productos (${totalprod})</p>
        <h2 class="total">$${subtotal}</h2>
        <button class="btn-comprar">
            Continuar (${totalprod})
        </button>
    `;
}

//init
document.addEventListener("DOMContentLoaded", () => {
    renderCarrito();
    actCont();
});