/* 
El useNavigate() se usa para navegar hacia otro path de la aplicación

*/

const App = () => {
	const navigate = useNavigate()

	const onHandledSend = () => {
		navigate('/home') // Al hacer click en el botón se dirige al path indicado en es te caso es /home
	}

	return (
		<div>
			<button onClick={onHandledSend}>Ir al home</button>
		</div>
	)
}
export default App
