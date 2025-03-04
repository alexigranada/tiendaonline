import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";

function NavBar() {
    return (
        <nav className="bg-zing-800 my-3 flex justify-between py-5 px-10 rounded-lg">
            <Link to='/'>
                <h2 className="text-xl font-bold">Tienda onLine</h2>
            </Link>
            <ul className="flex gap-x-10">
                <li className="flex items-center">
                    <Link to='/'>Lista de productos</Link>
                </li>

                <li>
                    <Link to='/butget'>Presupuesto</Link>
                </li>

                <li className="">
                    <Link to='/cart' className="flex"><ShoppingCart size={20} className="mx-5"/> Mi Carrito</Link>
                </li>
            </ul>
        </nav>
    )
};

export default NavBar;