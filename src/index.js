console.log("Hola Mundo");
/*Importa modulos*/
import express from "express"
import { PORT } from "./config.js";
import rutaProductos from "./rutas/products.ruta.js"
import rutaCarrito from "./rutas/cart.ruta.js"
import cors from "cors"

//Creamos a aplicción
const app = express()

//Permitimos comunicación entre los diferentes servidores
app.use(cors({
    origin: 'http://localhost:5173',
}))

//Ejecutamos la ruta para productos
app.use("/products", rutaProductos)

//Ejecutamos la ruta paraaaaa productos en carrito
app.use("/cart", rutaCarrito)

//Pasamos el argumento del puerto
app.listen(PORT)
console.log('Server iniciado en el puerto', PORT);
