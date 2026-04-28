document.addEventListener("DOMContentLoaded", actCont);

const prods = [
    {
        id: 1,
        titulo: "Redmi",
        precio: 13999,
        precio_ant: 29999,
        descuento: "53% off",
        meses: "15 meses sin intereses",
        envio: "llega gratis mañana",
        sold: 120,
        location: "cdmx",
        img: "img/p1.pnj"
    },
    {
        id: 2,
        titulo: "Redmi",
        precio: 13999,
        precio_ant: 29999,
        descuento: "53% off",
        meses: "15 meses sin intereses",
        envio: "llega gratis mañana",
        sold: 120,
        location: "cdmx",
        img: "img/p1.pnj"
    },
    {
        id: 3,
        titulo: "Redmi",
        precio: 13999,
        precio_ant: 29999,
        descuento: "53% off",
        meses: "15 meses sin intereses",
        envio: "llega gratis mañana",
        sold: 120,
        location: "cdmx",
        img: "img/p1.pnj"
    }
];

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
        return{
            ...p,
            cantidad: (parseInt(p.cantidad) || 1)
        };
    });

    localStorage.setItem("carrito", JSON.stringify(carrito));

    return carrito;
}

//render
const contenedor = document.getElementById("productos");

prods.forEach(p => {
    contenedor.innerHTML += `
        <div class="producto" data-id="${p.id}">
            <img src="${p.img}">
            <p class="titulo">${p.descuento}</p>
            ${p.precio_ant ? `<p class="precio-anterior">$${p.precio_ant}</p>` : ""}
            <p class="precio">
                $${p.precio}
                <span>${p.descuento}</span>
            </p>
            <p class="meses">${p.meses}</p>
            <p class="envio">
                ${p.envio} <span class="full">FULL</span>
            </p>
            <p class="vendidos">$${p.sold} vendidos</p>
        </div>
    `;
});

//ver producto
function verProd(id){
    const producto = prods.find(p => p.id === id);

    localStorage.setItem("prodSelect", JSON.stringify(producto));
}

//carrito
function getCarrito(){
    return JSON.parse(localStorage.getItem("carrito")) || [];
}

function saveCarrito(carrito){
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

document.addEventListener("click", e => {
    if(e.target.classList.contains("btn-agregar")){
        const id = parseInt(e.target.dataset.id);
        const producto = prods.find(p => p.id === id);

        let carrito = getCarrito();
        let existe = carrito.find(p => p.id === producto.id);

        if(existe){
            existe.cantidad++;
        } else {
            producto.cantidad = 1;
            carrito.push(producto);
        }

        saveCarrito(carrito);
        alert("producto agregado");
    }
});

document.addEventListener("click", function(e){
    //click en producto
    const card = e.target.closest(".producto");

    if(card && !e.target.classList.contains("btn-agregar")){
        const id = parseInt(card.dataset.id);
        verProd(id);
        return;
    }

    if(e.target.classList.contains("btn-agregar")){
        const id = parseInt(e.target.dataset.id);
        const producto = prods.find(p => p.id === id);

        let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
        let existe = carrito.find(p => p.id === producto.id);

        if(existe){
            existe.cantidad = (parseInt(existe.cantidad) || 0) + 1;
        } else {
            carrito.push({ ...producto, cantidad: 1});
        }

        localStorage.setItem("carrito", JSON.stringify(carrito));

        actCont();

        alert("producto agregado");
    }
});