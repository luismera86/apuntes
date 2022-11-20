
/* 

El useLocation() se usa para obtener la ruta de localización en el navegador por ejemplo si estamos en el /app 

*/

const App = () => {
    const location = useLocation()
    
    console.log(location) // te devuelve los valores que puedes utilizar para la localización 

	return <div>App</div>
}
export default App
