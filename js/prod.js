function actCont(){
    let carrito = normCarrito();
    let total = 0;

    carrito.forEach(p => {
        total += p.cantidad;
    });

    const contador = document.getElementById("contador-carrito");

    if(contador){
        contador.textContent = total;
    }
}

function normCarrito(){
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    carrito = carrito.map(p => {
        return {
            ...p,
            cantidad: (parseInt(p.cantidad) || 1)
        };
    });

    localStorage.setItem("carrito", JSON.stringify(carrito));

    return carrito;
}

const contenedor = document.getElementById("detalle-producto");
const producto = JSON.parse(localStorage.getItem("prodSelect"));

if(producto){
    contenedor.innerHTML = `
        <div class="galeria">
            <img src="${producto.img}">
        </div>
        <div class="info-producto">
            <p class="condicion">Nuevo | ${producto.sold} vendidos</p>
            <h1 class="titulo">${producto.titulo}</h1>
            ${producto.precio_ant ? `<p class="precio-anterior">$${producto.precio_ant}</p>` : ""}
            <p class="precio">
                $${producto.precio}
                <span class="descuento">${producto.descuento}</span>
            </p>
            <p class="meses">${producto.meses}</p>
            <p class="envio">${producto.envio}</p>
            <p class="ubicacion">Enviado desde ${producto.location}</p>
            <button class="btn-agregar" onclick="addCarrito()">
                Agregar al carrito
            </button>
        </div>
    `;
}

//carrito
function addCarrito(){
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    let existe = carrito.find(p => p.id === producto.id);

    if(existe){
        existe.cantidad++;
    } else {
        producto.cantidad = 1;
        carrito.push(producto);
    }

    localStorage.setItem("carrito", JSON.stringify(carrito));
    alert("producto agregado al carrito")
}

document.addEventListener("DOMContentLoaded", actCont);