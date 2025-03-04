import React, { useState, useEffect } from "react";
//import { useNavigate } from "react-router-dom";
import ListaProductos from "../Componentes/ListaProductos";
//import { ShoppingCart } from "lucide-react";

function Inicio() {

    const [productos, setProductos] = useState([]);
    //const navigate = useNavigate();

    useEffect(() => {
        fetch("http://localhost:4000/products")
          .then((res) => res.json())
          .then((data) => setProductos(data))
          .catch((err) => console.error("Error: ", err));
    }, []);

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            {/*<h2>Lista de productos</h2>*/}
            {/*<button onClick={() => navigate('/cart')}> <ShoppingCart size={20}/> Ver Carrito</button>*/}
            <ListaProductos productos={productos}></ListaProductos>
        </div>
    )
};

export default Inicio;

