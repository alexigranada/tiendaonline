<!-- Cali, Marzo 4 de 2024
 Autor: Arturo Alexis Granada Giron
 Titulo: Prueba técnica API y Carrito de compras -->

# Punto No 1: Back-end desarrollado en NODEJS y Express
1.1 Cree un JSON con la lista de los productos
1.2 Cree dos rutas, una para listar los productos
1.3 Otra ruta para agregar producto a carrito y mostrar productos añadidos

# Punto No 2: Front-end desarrollado con React (Vite)
2.1 Crear un proyecto de vite con react
2.2 Para los estilos utilizo Tailwindcss y para los iconos utilice Lucide-react   
2.3 Para la app cree dos componentes, uno para el Navbar y una tarjeta para mostrar el carrito
2.4 Cree dos pagínas, la inicial y otra para el carrito de compras
2.5 Para el manejo de las rutas utilice la librería "react-router-dom"
2.6 Para las peticiones al backend utilice la función "fetch" y guarde la resapuesta en los hucks de react
2.7 Para la comunicación entre servicios intale la librería CORS 

# INSTALACIÓN Y CONFIGURACIÓN DEL PROYECTO

1. Clonar el repositorio: git clone https://github.com/alexigranada/tiendaonline.git
2. Accedemos a la carpera del servidor Backend: cd CARRITO
3. Instalamos dependencias y librerias del Backend: npm install
4. Iniciamos el servidor: npm start

# Configuración del Frontend
5. Acedemos a la carpeta cliente: cd cliente
6. Instalamos librerias y dependencias: npm install
7. Iniciamos el servidor en React: npm run dev

# FUNCIÓN DE LA API

1. Método GET a la ruta /products para listar productos
2. Método POST a la ruta /cart/:id para agregar un producto al carrito
3. Método GET a la ruta /cart Lista los productos añadidos al carrito

📌 Autor: [AGranada]
📅 Última actualización: 2025-03-04
