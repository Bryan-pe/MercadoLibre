<?php
    include("conexion.php");
    $id = $_GET['id'];
    $query = "SELECT * FROM productos WHERE id = $id";
    $resul = $db->query($query);
    $prod = $resul->fetchArray();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" href="../icons/doodle_cat.png">
    <link rel="stylesheet" href="../css/prod_style.css">
    <link rel="stylesheet" href="../css/styles.css">
    <link rel="stylesheet" href="../css/styles_productos.css">
    <title><?php echo $prod['titulo']; ?></title>
</head>
<body>
    <header class="header">
        <!--fila superior-->
        <div class="header-top">
            <div class="logos">
                <a href="../index.html"><img src="../img/logo.png" alt="logo mercado libre"></a>
            </div>
            <div class="buscador">
                <form>
                    <input type="text" placeholder="Buscar productos, marcas y mas...">
                    <button type="submit">
                        <img src="../icons/lupa.png" alt="buscador">
                    </button>
                </form>
            </div>
            <img src="../img/meli.png" alt=" logo mercado libre" class="img-banner">
        </div>
        <!--barra de navegacion-->
        <nav class="nav">
            <ul class="menu-left">
                <li><a href="catalogo.php">Catalogo</a></li>
                <li><a href="#">Ofertas</a></li>
                <li><a href="#">Cupones</a></li>
                <li><a href="#">Supermercado</a></li>
                <li><a href="#">Moda</a></li>
                <li><a href="#">Mercado Play</a></li>
                <li><a href="#">Vender</a></li>
                <li><a href="#">Ayuda</a></li>
            </ul>
            <ul class="menu-right">
                <li><a href="../registro.html">Crea tu cuenta</a></li>
                <li><a href="#"></a>Ingresa</li>
                <li><a href="#"></a>Mis compras</li>
                <li class="carrito-icono">
                    <a href="../carrito.html">
                        <img src="../icons/carrito.png" class="img-carrito">
                        <span id="contador-carrito" class="contador">0</span>
                    </a>
                </li>
            </ul>
        </nav>
    </header>
    <main class="contenedor-producto">
        <div class="galeria">
            <img src="../img/<?php echo $prod['imagen']; ?>">
        </div>
        <div class="info-producto">
            <!--<p class="condicion">Nuevo | ${producto.sold} vendidos</p>-->
            <h1 class="titulo"><?php echo $prod['titulo']; ?></h1>
            <p class="precio-anterior"><?php echo $prod['precio_ant']; ?></p>
            <p class="precio">
                <?php echo $prod['precio']; ?>
                <span class="descuento"><?php echo $prod['descuento']; ?></span>
            </p>
            <p class="meses"><?php echo $prod['meses']; ?></p>
            <p class="envio"><?php echo $prod['envio']; ?></p>
            <p><?php echo $prod['descripcion']; ?></p>
            <!--<p class="ubicacion">Enviado desde ${producto.location}</p>-->
            <button class="btn-agregar">
                Agregar al carrito
            </button>
        </div>
        <script src="js/prod.js"></script>
    </main>
    <footer>
        <p>© 2026 Mercado Libre</p>
    </footer>
</body>
</html>