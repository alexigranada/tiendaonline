import { Router } from "express";
import { readFile } from "fs/promises";

const router = Router();

// Cargar el JSON con productos
const productos = JSON.parse(await readFile(new URL("../data/productos.json", import.meta.url)));
//console.log(productos);

// Lista para guardar los productos en el carrito
const carrito = [];

//Ruta para listar el productos añadidos al carrito
router.get('/', (req, res) => {
    res.json(carrito)
});

//Ruta para agregar un producto por ID
router.post('/:cartId', (req, res) => {
    const productoId = parseInt(req.params.cartId);
    //console.log("Product ID recibido:", productoId);

    //Buscar producto en la lista
    const producto =  productos.find((p) => p.id === productoId);
    //console.log("Lista de productos cargada:", producto);

    carrito.push(producto);
    res.json({ message: "Producto agregado al carrito: ", carrito});
});

export default router;

