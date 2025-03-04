import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Importamos las paginas inicio y carrito
import Inicio from "./Paginas/Inicio";
import Carrito from "./Paginas/Carrito";

//Importamos Navbar
import NavBar from "./Componentes/NavBar"

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Inicio/>}></Route>
        <Route path="/cart" element={<Carrito/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;