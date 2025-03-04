import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Carrito() {
    const [carrito, setCarrito] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
      fetch("http://localhost:4000/cart")
        .then((res) => res.json())
        .then((data) => setCarrito(data))
        .catch((err) => console.error("Error:", err));
    }, []);

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Carrito de compras</h2>
                {carrito.length === 0 ? (<p>Lo invitamos a añadir nuestros productos</p>) : (
                    carrito.map((producto, index) => (
                        <div key={index} className="bg-gray-50 shadow p-4 rounded-lg mb-3">
                            <h3>{producto.name}</h3>
                            <p>Precio: ${producto.price}</p>
                        </div>
                    ))
                )
                }
                <button onClick={ () => navigate('/')} className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full mb-4 flex items-center gap-2" >Ir a productos</button>
            </div>
        </div>
    )
};

export default Carrito;