// Instalación https://reactrouter.com/docs/en/v6/getting-started/installation

import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>,
	document.getElementById('root')
)

// Componente hijo App.jsx

import { Route, Routes, Link, useParams } from 'react-router-dom'

// componentes hijos que se ecuentran en el componente App.jsx

const Home = () => <h1>Home</h1>
const SearchPage = () => {
    const produtos = [
        'Producto 1',
        'Producto 2',
        'Producto 3',
        'Producto 4',
    ]
    return (
        <div>
            <h1>SearchPage</h1>
            {produtos.map((producto) => {
                <Link key={producto} to={`/productos/${producto}`}>{producto}</Link>
            }
            )}
        </div>
    )
}

const Productos = () => {

    const { name } = useParams() // Es un componente que nos va a devolver un objeto donde vamos a tener las key del segmento dinámico del path
return (
    <div>
        <h1>Produtos</h1>
        <h2>{name}</h2> {/* name muestra el producto elegido */}
    </div>

)
}

function App() {
	return (
		<div>
			<nav>Navbar del sitio</nav>
			{/* Lo que se encuentra fuera de <Routes></Routes> queda fijo en la pantalla de la aplicación y no se puede cambiar, solamente se cambian los componentes que estan en Router */}
			<Link to=''>HOME</Link>
			{/* Link reemplaza a la etquieta <a>  y to reemplaza a 'href'  */}
			<Link to=''>SEARCH PAGE</Link>
			<Routes>
				// Routes envuelve todas las rutas Prueba de Ract Router
				<Route path='/' element={<Home />} /> //En el path se pone la ruta que
				se va a renderizar y en element los elementos del componente que se va a
				renderizar (los componentes son funciones que retornan un elemento)
				<Route path='/search' element={<SearchPage />} />
                <Route path='/productos/:name' element={<Productos />} /> {/* el :name es el useParams que se envía al componente que se quiere mostrar, const { name } = useParams */}
			</Routes>
		</div>
	)
}
