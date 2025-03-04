import { Router } from "express";
import { readFile } from "fs/promises";

const router = Router();

// Cargar el JSON con productos
const productos = JSON.parse(await readFile(new URL("../data/productos.json", import.meta.url)));


//Ruta para listar todos los productos
router.get('/', (req, res) => {
    res.json(productos)    
});

export default router;