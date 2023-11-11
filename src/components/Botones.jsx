function Boton1(props){

	function funcBoton(){
		console.info('click en boton '+props.title)
	}

	return (
		<button onClick={ funcBoton } className={`py-2 px-7 rounded font-bold tracking-tighter text-sm uppercase duration-200 text-${props.color}-900 bg-${props.color}-500 hover:bg-${props.color}-400`}>{ props.title }</button>
	)
}

function Boton2(props){

	function funcBoton(){
		console.info('click en boton '+props.title)
	}

	return (
		<button onClick={ funcBoton } className={`relative py-4 px-1 rounded font-bold tracking-tighter text-sm uppercase text-zinc-500 duration-200 before:absolute before:left-0 before:bottom-0 before:h-1 before:rounded before:w-0 before:hover:w-full before:duration-200 before:bg-${props.color}-500`}>{ props.title }</button>
	)
}

export { Boton1, Boton2 }