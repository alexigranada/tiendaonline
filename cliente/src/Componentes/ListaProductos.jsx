import { PlusCircle } from "lucide-react";

function ListaProductos({ productos }) {

    const addCarrito = (id) => {
        fetch(`http://localhost:4000/cart/${id}`, { method: "POST"})
        .then((res) => res.json())
        .catch((err) => console.error("Error en la petición", err));
    };

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
                {productos.map((producto) => (

                    <div key={producto.id} className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition">
                        <h2 className="text-lg font-semibold">{producto.name}</h2>
                        <p>Precio: ${producto.price}</p>
                        <button onClick={() => addCarrito(producto.id)} className="mt-3 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full flex items-center gap-2 justify-center"> <PlusCircle size={15} />Agregar al carrito</button>
                    </div>
                ))
                }
        </div>
    );
};

export default ListaProductos;