<?php
    include("conexion.php");
    $query = "SELECT * FROM productos";
    $resul = $db->query($query);
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" href="../icons/doodle_cat.png">
    <link rel="stylesheet" href="../css/styles.css">
    <link rel="stylesheet" href="../css/cat_style.css">
    <link rel="stylesheet" href="../css/styles_productos.css">
    <title>Catalogo</title>
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
    <main>
        <div class="catalogo"> 
            <!--sidebar-->
            <aside class="filtros">
                <h3>Redmagic</h3>
                <p class="resultados">4,334 resultados</p>
                <div class="filtro">
                    <span>Llega mañana</span>
                    <label class="switch">
                        <input type="checkbox">
                        <span class="slider-cat"></span>
                    </label>
                </div>

                <div class="filtro">
                    <span>FULL envio gratis</span>
                    <label class="switch">
                        <input type="checkbox">
                        <span class="slider-cat"></span>
                    </label>
                </div>

                <div class="filtro">
                    <span>Internacional</span>
                    <label class="switch">
                        <input type="checkbox">
                        <span class="slider-cat"></span>
                    </label>
                </div>

                <div class="filtro">
                    <span>Envio gratis</span>
                    <label class="switch">
                        <input type="checkbox">
                        <span class="slider-cat"></span>
                    </label>
                </div>
            </aside>

            <!--contenido-->
            <section class="contenido-cat">
                <!--orden-->
                <!--<div class="orden">
                    <span>Ordenar por</span>
                    <select>
                        <option>Mas relevantes</option>
                        <option>Menor precio</option>
                        <option>Mayor precio</option>
                    </select>
                </div>-->

                <!--grid-->
                <div class="productos-grid">
                    <?php while($prod = $resul->fetchArray()){ ?>
                    <a href="producto.php?id=<?php echo $prod['id']; ?>" class="producto-link">
                        <div class="producto">
                            <img src="<?php echo $prod['imagen']; ?>">
                            <p class="titulo"><?php echo $prod['titulo']; ?></p>
                            <?php if($prod['precio_ant']){ ?>
                            <p class="precio-anterior">$<?php echo $prod['precio_ant']; ?></p>
                            <?php } ?>
                            <p class="precio">
                                $<?php echo $prod['precio']; ?>
                                <span><?php echo $prod['descuento']; ?></span>
                            </p>
                            <p class="meses"><?php echo $prod['meses']; ?></p>
                            <p class="envio"><?php echo $prod['envio']; ?></p>
                            <!--<p class="vendidos">$${p.sold} vendidos</p>-->
                            <button class="btn-agregar">
                                Agregar al carrito
                            </button>
                        </div>
                    </a>
                    <?php } ?>
                </div>
            </section>
        </div>
    </main>
    <script src="js/catalogo.js"></script>
    <footer>
        <p>© 2026 Mercado Libre</p>
    </footer>
</body>
</html>